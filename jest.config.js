/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm', // Use ts-jest ESM preset
  testEnvironment: 'node', // Set the test environment to Node.js
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Map .js imports to their TypeScript sources
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: true, // Enable ESM support in ts-jest
    }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Recognize TypeScript file extensions
  testMatch: ['**/test/**/*.test.ts'], // Match test files in the test folder
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore node_modules
};
