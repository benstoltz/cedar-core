module.exports = function (wallaby) {

  return {
    files: [
      'src/**/*.js',
      '!app/**/*.spec.js'
    ],
    tests: [
      'tests/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'ava',

    debug: true
  };
};
