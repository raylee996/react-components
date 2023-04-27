export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};