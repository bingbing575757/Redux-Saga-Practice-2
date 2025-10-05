const config = {
    roots: ['<rootDir>/tests'],
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^js/(.*)$': '<rootDir>/src/js/$1',
        '^components/(.*)$': '<rootDir>/src/components/$1',
        // add more if needed
    },
    moduleDirectories: ['node_modules', 'src'],
}

module.exports = config;