var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var main_menu_component_1 = require('./common/main-menu/main-menu.component');
var news_component_1 = require('./news/news.component');
var home_component_1 = require('./home/home.component');
var AppComponent = (function () {
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
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map