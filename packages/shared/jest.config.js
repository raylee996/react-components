export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};