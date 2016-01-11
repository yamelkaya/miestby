System.register(['angular2/platform/browser', 'angular2/router', './app.component'], function(exports_1) {
    var browser_1, router_1, app_component_1;
    return {
        setters:[
            function (_browser_1) {
                browser_1 = _browser_1;
            },
            function (_router_1) {
                router_1 = _router_1;
            },
            function (_app_component_1) {
                app_component_1 = _app_component_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
