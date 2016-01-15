System.register(['angular2/core', 'angular2/router', './news.service', './detail/news-detail.component', './list/news-list.component'], function(exports_1) {
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
    var core_1, router_1, news_service_1, news_detail_component_1, news_list_component_1;
    var NewsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (news_detail_component_1_1) {
                news_detail_component_1 = news_detail_component_1_1;
            },
            function (news_list_component_1_1) {
                news_list_component_1 = news_list_component_1_1;
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
                    ]), 
                    __metadata('design:paramtypes', [])
                ], NewsComponent);
                return NewsComponent;
            })();
            exports_1("NewsComponent", NewsComponent); //
        }
    }
});
//# sourceMappingURL=news.component.js.map