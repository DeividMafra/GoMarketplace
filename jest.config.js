module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    // './node_modules/react-native/Libraries/Animated/NativeAnimatedHelper',
    './jest.setup.js',
    // './src/setupTest.ts',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    // 'mock-modules.js': '<rootDir>/src/__mocks__/fileMock.js',
  },
  // transform: {
  //   '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
  // },
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
