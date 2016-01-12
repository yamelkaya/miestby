System.config({
    transpiler: 'typescript',
    paths: {
        'systemjs': 'node_modules/systemjs/dist/system.js',
        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'angular2/*': 'node_modules/angular2/bundles/*.js',
        //'traceur': 'node_modules/traceur/bin/traceur.js',
        'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js'
    }
});