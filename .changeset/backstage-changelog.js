/*
 * Copyright 2021 The Backstage Authors
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

const {
  default: defaultChangelogFunctions,
} = require('@changesets/changelog-github');

// Custom CHANGELOG generation for changesets, stolen from here with one minor change:
// https://github.com/atlassian/changesets/blob/main/packages/cli/src/changelog/index.ts
async function getDependencyReleaseLine(changesets, dependenciesUpdated) {
  if (dependenciesUpdated.length === 0) return '';

  const updatedDependenciesList = dependenciesUpdated.map(
    dependency => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  // Return one `Updated dependencies` bullet instead of repeating for each changeset; this
  // sacrifices the commit shas for brevity.
  return ['- Updated dependencies', ...updatedDependenciesList].join('\n');
}

async function getReleaseLine(changeset, type, options) {
  const { ignoreUserThanks: users = [] } = options ?? {};
  const ignoredLinks = new Set(
    users.map(user => `[@${user}](https://github.com/${user})`),
  );
  const releaseLine = await defaultChangelogFunctions.getReleaseLine(
    changeset,
    type,
    options,
  );
  return releaseLine.replace(/Thanks\s(.*)!\s/g, (_, group) => {
    const links = group.split(', ').filter(link => !ignoredLinks.has(link));
    return links.length ? `Thanks ${links.join(', ')}! ` : '';
  });
}

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
