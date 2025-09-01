// THIS IS NEEDED TO ADD CUSTOM MATCHERS TO VITEST
/* eslint-disable @typescript-eslint/no-empty-object-type */

import type { ConfigData } from 'html-validate';
import 'vitest';
import type { AxeMatchers } from 'vitest-axe/matchers';

interface CustomMatchers<R = unknown> {
  toRenderValidHTMLCustom(config?: ConfigData): R;
  toBeAccessible(options?: AxeMatchers): R;
}

declare module 'vitest' {
  interface Assertion<T> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
