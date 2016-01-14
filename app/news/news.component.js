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
var news_service_1 = require('./news.service');
var news_detail_component_1 = require('./news-detail.component');
var news_list_component_1 = require('./news-list.component');
var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent = __decorate([
        core_1.Component({
            template: "<router-outlet></router-outlet>",
            providers: [news_service_1.NewsService],
            directives: [router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'NewsList', component: news_list_component_1.NewsListComponent, useAsDefault: true },
            { path: '/detail/:id', name: 'NewsDetail', component: news_detail_component_1.NewsDetailComponent },
            { path: '/edit/:id', name: 'NewsEdit', component: news_detail_component_1.NewsDetailComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], NewsComponent);
    return NewsComponent;
})();
exports.NewsComponent = NewsComponent; //
//# sourceMappingURL=news.component.js.map