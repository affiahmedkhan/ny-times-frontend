module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    },
    coverageDirectory: 'coverage', // Directory where coverage reports will be saved
    coverageThreshold: {
        global: {
            branches: 80, // Minimum coverage threshold for branches
            functions: 80, // Minimum coverage threshold for functions
            lines: 80, // Minimum coverage threshold for lines
            statements: 80, // Minimum coverage threshold for statements
        },
    },
};
