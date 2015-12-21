module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            app: {
                options: {
                    debug: true,
                    browserifyOptions: {
                        debug: true
                    },
                    transform: [["babelify"]]
                },
                files: {
                    "./build/module.js": './app/boot.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ["./app/**/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask('build', ['browserify']);
};