/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset to handle TypeScript files
  testEnvironment: 'node', // Set the test environment to Node.js
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Recognize TypeScript file extensions
  testMatch: ['**/test/**/*.test.ts'], // Match test files in the test folder
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore node_modules
};