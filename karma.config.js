module.exports = function(config) {
    config.set({
        basePath: './',

        frameworks: ['systemjs', 'jasmine'],

        plugins: ['karma-systemjs', 'karma-jasmine', 'karma-phantomjs-launcher'],
        //plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher'],

        files: [
            'test/**/*.spec.ts'
        ],

        //exclude: [
        //    'node_modules/'
        //],

        systemjs: {
            configFile: 'system.conf.js',
            serveFiles: [
                'app/**/*.ts',
                'test/**/*.ts',
                'node_modules/**/*'
            ],
            //config: {
            //    defaultJSExtensions: true
            //}
        },

        reporters: ['progress'],
        //port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
        //preprocessors: {
        //    '**/*.ts': ['typescript']
        //},
        //
        //typescriptPreprocessor: {
        //    // options passed to the typescript compiler
        //    options: {
        //        sourceMap: false, // (optional) Generates corresponding .map file.
        //        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        //        module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
        //        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        //        noResolve: true, // (optional) Skip resolution and preprocessing.
        //        removeComments: true, // (optional) Do not emit comments to output.
        //        concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
        //    },
        //    // extra typing definitions to pass to the compiler (globs allowed)
        //    typings: [
        //        'typings/tsd.d.ts'
        //    ],
        //    // transforming the filenames
        //    transformPath: function(path) {
        //        return path.replace(/\.ts$/, '.js');
        //    }
        //}
    });
};
