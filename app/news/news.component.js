var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['angular2/core', 'angular2/router', './news.service', './news-detail.component', './news-list.component'], function(exports_1) {
    var core_1, router_1, news_service_1, news_detail_component_1, news_list_component_1;
    var NewsComponent;
    return {
        setters:[
            function (_core_1) {
                core_1 = _core_1;
            },
            function (_router_1) {
                router_1 = _router_1;
            },
            function (_news_service_1) {
                news_service_1 = _news_service_1;
            },
            function (_news_detail_component_1) {
                news_detail_component_1 = _news_detail_component_1;
            },
            function (_news_list_component_1) {
                news_list_component_1 = _news_list_component_1;
            }],
        execute: function() {
            NewsComponent = (function () {
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
                    ])
                ], NewsComponent);
                return NewsComponent;
            })();
            exports_1("NewsComponent", NewsComponent); //
        }
    }
});
