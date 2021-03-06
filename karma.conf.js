// Karma configuration
// Generated on Mon Apr 06 2015 15:26:49 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // dependencies
      'www/lib/angular/angular.min.js',
      'www/lib/angular-animate/angular-animate.min.js',
      'www/lib/angular-sanitize/angular-sanitize.min.js',
      'www/lib/angular-ui-router/release/angular-ui-router.min.js',
      'www/lib/ionic/js/ionic.min.js',
      'www/lib/ionic/js/ionic-angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'www/lib/rsvp/rsvp.min.js',
      'www/lib/firebase/firebase.js',
      'https://cdn.firebase.com/libs/geofire/2.0.0/geofire.min.js',
      'www/lib/angularfire/dist/angularfire.min.js',
//      'plugins/com.phonegap.plugins.facebookconnect/facebookConnectPlugin.js',
      'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=true',
      'www/lib/moment/moment.js',
      'www/lib/angular-moment/angular-moment.min.js',
      'www/lib/lodash/lodash.min.js',

      // app code & spec files
      'www/js/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
