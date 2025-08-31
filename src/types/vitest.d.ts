/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type { ConfigData } from 'html-validate'
// biome-ignore lint/correctness/noUnusedImports: necessary for the custom matcher
import type { Assertion, AsymmetricMatchersContaining } from 'vitest'
import type { AxeMatchers } from 'vitest-axe/matchers'

interface CustomMatchers<R = unknown> {
  toRenderValidHTMLCustom(config?: ConfigData): R
  toBeAccessible(options?: AxeMatchers): R
}

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
