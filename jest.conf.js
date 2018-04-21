module.exports = {
  rootDir: __dirname,
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@main/(.*)$': '<rootDir>/app/src/main/$1',
    '^@web/(.*)$': '<rootDir>/app/src/web/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  coverageDirectory: '<rootDir>/.coverage',
  collectCoverageFrom: [
    'app/src/**/*.{js,vue}',
    '!app/src/web/main.js',
    '!app/src/web/router/index.js',
    '!app/src/web/App.vue',
    '!app/src/main/index.js',
    '!**/node_modules/**'
  ]
}
