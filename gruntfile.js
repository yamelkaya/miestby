module.exports = function (grunt) {
    grunt.initConfig({
        'typescript': {
            test: {
                src: ['app/**/*.ts','test/**/*.ts'],
                dest: 'test-build/',
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

    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask("test-transpile", ["typescript"]);
};