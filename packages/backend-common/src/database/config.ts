/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config } from '@backstage/config';
import { JsonObject } from '@backstage/types';
import { Knex } from 'knex';
import { merge, omit } from 'lodash';
import path from 'path';
import {
  createNameOverride,
  createSchemaOverride,
  normalizeConnection,
} from './connection';

/**
 * Provides a config lookup path for a plugin's config block.
 */
function pluginPath(pluginId: string): string {
  return `plugin.${pluginId}`;
}

/**
 * Provides the canonical database name for a given plugin.
 *
 * This method provides the effective database name which is determined using global
 * and plugin specific database config. If no explicit database name is configured
 * and `pluginDivisionMode` is not `schema`, this method will provide a generated name
 * which is the pluginId prefixed with 'backstage_plugin_'. If `pluginDivisionMode` is
 * `schema`, it will fallback to using the default database for the knex instance.
 *
 * @param pluginId - Lookup the database name for given plugin
 * @returns String representing the plugin's database name
 */
export function getDatabaseName(
  config: Config,
  pluginId: string,
): string | undefined {
  const prefix = config.getOptionalString('prefix') ?? 'backstage_plugin_';
  const connection = getConnectionConfig(config, pluginId);

  if (getClientType(config, pluginId).client.includes('sqlite3')) {
    const sqliteFilename: string | undefined = (
      connection as Knex.Sqlite3ConnectionConfig
    ).filename;

    if (sqliteFilename === ':memory:') {
      return sqliteFilename;
    }

    const sqliteDirectory =
      (connection as { directory?: string }).directory ?? '.';

    return path.join(sqliteDirectory, sqliteFilename ?? `${pluginId}.sqlite`);
  }

  const databaseName = (connection as Knex.ConnectionConfig)?.database;

  // `pluginDivisionMode` as `schema` should use overridden databaseName if supplied or fallback to default knex database
  if (getPluginDivisionModeConfig(config) === 'schema') {
    return databaseName;
  }

  // all other supported databases should fallback to an auto-prefixed name
  return databaseName ?? `${prefix}${pluginId}`;
}

/**
 * Provides the client type which should be used for a given plugin.
 *
 * The client type is determined by plugin specific config if present.
 * Otherwise the base client is used as the fallback.
 *
 * @param pluginId - Plugin to get the client type for
 * @returns Object with client type returned as `client` and boolean
 *          representing whether or not the client was overridden as
 *          `overridden`
 */
export function getClientType(
  config: Config,
  pluginId: string,
): {
  client: string;
  overridden: boolean;
} {
  const pluginClient = config.getOptionalString(
    `${pluginPath(pluginId)}.client`,
  );

  const baseClient = config.getString('client');
  const client = pluginClient ?? baseClient;
  return {
    client,
    overridden: client !== baseClient,
  };
}

export function getRoleConfig(
  config: Config,
  pluginId: string,
): string | undefined {
  return (
    config.getOptionalString(`${pluginPath(pluginId)}.role`) ??
    config.getOptionalString('role')
  );
}

/**
 * Provides the knexConfig which should be used for a given plugin.
 *
 * @param pluginId - Plugin to get the knexConfig for
 * @returns The merged knexConfig value or undefined if it isn't specified
 */
export function getAdditionalKnexConfig(
  config: Config,
  pluginId: string,
): JsonObject | undefined {
  const pluginConfig = config
    .getOptionalConfig(`${pluginPath(pluginId)}.knexConfig`)
    ?.get<JsonObject>();

  const baseConfig = config.getOptionalConfig('knexConfig')?.get<JsonObject>();

  return merge(baseConfig, pluginConfig);
}

export function getEnsureExistsConfig(
  config: Config,
  pluginId: string,
): boolean {
  const baseConfig = config.getOptionalBoolean('ensureExists') ?? true;
  return (
    config.getOptionalBoolean(`${pluginPath(pluginId)}.ensureExists`) ??
    baseConfig
  );
}

export function getPluginDivisionModeConfig(config: Config): string {
  return config.getOptionalString('pluginDivisionMode') ?? 'database';
}

/**
 * Provides a Knex connection plugin config by combining base and plugin
 * config.
 *
 * This method provides a baseConfig for a plugin database connector. If the
 * client type has not been overridden, the global connection config will be
 * included with plugin specific config as the base. Values from the plugin
 * connection take precedence over the base. Base database name is omitted for
 * all supported databases excluding SQLite unless `pluginDivisionMode` is set
 * to `schema`.
 */
export function getConnectionConfig(
  config: Config,
  pluginId: string,
): Knex.StaticConnectionConfig {
  const { client, overridden } = getClientType(config, pluginId);

  let baseConnection = normalizeConnection(
    config.get('connection'),
    config.getString('client'),
  );

  if (
    client.includes('sqlite3') &&
    'filename' in baseConnection &&
    baseConnection.filename !== ':memory:'
  ) {
    throw new Error(
      '`connection.filename` is not supported for the base sqlite connection. Prefer `connection.directory` or provide a filename for the plugin connection instead.',
    );
  }

  // Databases cannot be shared unless the `pluginDivisionMode` is set to `schema`. The
  // `database` property from the base connection is omitted unless `pluginDivisionMode`
  // is set to `schema`. SQLite3's `filename` property is an exception as this is used as a
  // directory elsewhere so we preserve `filename`.
  if (getPluginDivisionModeConfig(config) !== 'schema') {
    baseConnection = omit(baseConnection, 'database');
  }

  // get and normalize optional plugin specific database connection
  const connection = normalizeConnection(
    config.getOptional(`${pluginPath(pluginId)}.connection`),
    client,
  );

  if (client === 'pg') {
    (
      baseConnection as Knex.PgConnectionConfig
    ).application_name ||= `backstage_plugin_${pluginId}`;
  }

  return {
    // include base connection if client type has not been overridden
    ...(overridden ? {} : baseConnection),
    ...connection,
  } as Knex.StaticConnectionConfig;
}

/**
 * Provides a Knex database config for a given plugin.
 *
 * This method provides a Knex configuration object along with the plugin's
 * client type.
 *
 * @param pluginId - The plugin that the database config should correspond with
 */
export function getConfigForPlugin(
  config: Config,
  pluginId: string,
): Knex.Config {
  const { client } = getClientType(config, pluginId);
  const role = getRoleConfig(config, pluginId);

  return {
    ...getAdditionalKnexConfig(config, pluginId),
    client,
    connection: getConnectionConfig(config, pluginId),
    ...(role && { role }),
  };
}

/**
 * Provides a partial `Knex.Config` database schema override for a given
 * plugin.
 *
 * @param pluginId - Target plugin to get database schema override
 * @returns Partial `Knex.Config` with database schema override
 */
export function getSchemaOverrides(
  config: Config,
  pluginId: string,
): Knex.Config | undefined {
  return createSchemaOverride(getClientType(config, pluginId).client, pluginId);
}

/**
 * Provides a partial `Knex.Config`• database name override for a given plugin.
 *
 * @param pluginId - Target plugin to get database name override
 * @returns Partial `Knex.Config` with database name override
 */
export function getDatabaseOverrides(
  config: Config,
  pluginId: string,
): Knex.Config {
  const databaseName = getDatabaseName(config, pluginId);
  return databaseName
    ? createNameOverride(getClientType(config, pluginId).client, databaseName)
    : {};
}
