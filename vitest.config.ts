import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    // The Vega SDK is never loaded by the tests: each test file that touches
    // a component stands in for @amazon-devices/react-native-kepler.
    environment: 'node',
  },
});
