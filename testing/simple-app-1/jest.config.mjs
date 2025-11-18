/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",

  // All test files
  testMatch: ["**/?(*.)+(spec|test).ts"],

  // Tell Jest these are ESM
  extensionsToTreatAsEsm: [".ts"],

  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },

  moduleFileExtensions: ["ts", "js", "json"]
};

export default config;
