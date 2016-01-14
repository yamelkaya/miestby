module.exports = function(config) {
    config.set({
        basePath: './',

        frameworks: ['browserify','jasmine'],

        plugins: ['karma-browserify','karma-jasmine', 'karma-phantomjs-launcher'],
        //plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher'],

        files: [
            'build/test/app/boot.js',
            'build/test/**/*.spec.js'
        ],

        preprocessors: {
            'build/test/**/*.js': [ 'browserify' ]
        },

        browserify: {
            debug: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity

    });
};
