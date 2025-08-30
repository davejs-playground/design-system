import { expect } from 'vitest';
import customMatchers from './test/matchers';

expect.extend(customMatchers);
