const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/services/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text-summary',
    'lcov',
  ],

};
