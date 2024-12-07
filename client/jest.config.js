export default {
    clearMocks: true,
    collectCoverage: true,
    // collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    moduleFileExtensions: ["js", "jsx", "html", "ts", "tsx"],
    passWithNoTests: true,
    testMatch: ["**/+(*.)+(spec|test).+(ts|tsx)"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "node_modules/(?!variables/.*)",
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1", // Map `@/` to the `src` directory
        "^.+\\.svg$": "jest-svg-transformer",
    },
    transform: {
      "^.+\\.tsx?$": "ts-jest" ,
        "^.+\\.(js|jsx|mjs)$": "babel-jest", // Transform JavaScript, including ES modules
      },
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
