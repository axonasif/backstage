/*
 * Copyright 2023 The Backstage Authors
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

import { BackstagePlugin } from '@backstage/core-plugin-api';
import { ComponentType, PropsWithChildren } from 'react';

// TODO(Rugvip): This might be a quite useful utility type, maybe add to @backstage/types?
/**
 * Utility type to expand type aliases into their equivalent type.
 * @ignore
 */
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/** @public */
export type CoreProgressComponent = ComponentType<PropsWithChildren<{}>>;

/** @public */
export type CoreBootErrorPageComponent = ComponentType<
  PropsWithChildren<{
    step: 'load-config' | 'load-chunk';
    error: Error;
  }>
>;

/** @public */
export type CoreNotFoundErrorPageComponent = ComponentType<
  PropsWithChildren<{}>
>;

/** @public */
export type CoreErrorBoundaryFallbackComponent = ComponentType<
  PropsWithChildren<{
    plugin?: BackstagePlugin;
    error: Error;
    resetError: () => void;
  }>
>;
