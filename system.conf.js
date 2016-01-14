System.config({
    //transpiler: 'typescript',
    "transpiler": "traceur",
    "traceurOptions": {
        "annotations": true,
        "memberVariables": true
    },
    defaultJSExtensions: true,
    paths: {
        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'rxjs/*': 'node_modules/rxjs/*.js',
        'angular2/*': 'node_modules/angular2/*.js',
        'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
        'moment': 'node_modules/moment/moment.js',
    },
    //typescriptOptions: {
    //    "emitDecoratorMetadata": true,
    //    "experimentalDecorators": true,
    //    "removeComments": true,
    //    "diagnostics": true,
    //    moduleResolution: "node",
    //},
    //packages: {
    //    app: {
    //        defaultExtension: 'ts'
    //    }
        //test: {
        //    defaultExtension: 'ts'
        //},
        //'node_modules/angular2/ts': {
        //    defaultExtension: 'ts'
        //}
    //}
});