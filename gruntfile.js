module.exports = function (grunt) {
    grunt.initConfig({
        'clean': {
            'test': "build"
        },
        'typescript': {
            test: {
                src: ['app/**/*.ts','test/**/*.ts'],
                dest: 'build/',
                options: {
                    "emitDecoratorMetadata": true,
                    "experimentalDecorators": true,
                    "declaration": true,
                    "module": "commonjs",
                    "rootDir": ".",
                    "sourceMap": true,
                    "sourceRoot": ".",
                    "target": "es5",
                    "moduleResolution": "classic",
                    references: [
                        "typings/moment/moment.d.ts"
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask("transpile", ["clean","typescript"]);
};