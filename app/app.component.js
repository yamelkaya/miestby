var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['angular2/core', 'angular2/router', './common/main-menu/main-menu.component', './news/news.component', './home/home.component'], function(exports_1) {
    var core_1, router_1, main_menu_component_1, news_component_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (_core_1) {
                core_1 = _core_1;
            },
            function (_router_1) {
                router_1 = _router_1;
            },
            function (_main_menu_component_1) {
                main_menu_component_1 = _main_menu_component_1;
            },
            function (_news_component_1) {
                news_component_1 = _news_component_1;
            },
            function (_home_component_1) {
                home_component_1 = _home_component_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mst-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, main_menu_component_1.MainMenuComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/news/...', name: 'News', component: news_component_1.NewsComponent }
                    ])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
