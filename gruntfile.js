module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            app: {
                options: {
                    extensions: ['.js', '.json', '.es6'],
                    debug: true,
                    browserifyOptions: {
                        debug: true
                    },
                    transform: [["babelify", {presets: ['stage-0', 'es2015']}]]
                },
                files: {
                    "./build/module.js": ['./app/**/*.es6']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask('build', ['browserify']);
};