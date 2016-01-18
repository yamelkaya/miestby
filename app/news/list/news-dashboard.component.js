System.register(['angular2/core', 'angular2/router', './../news.service', './../news-base.component', '../../common/page-header.component', './news-list.component'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, router_1, news_service_1, news_base_component_1, page_header_component_1, news_list_component_1;
    var NewsDashboardComponent;
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
            function (news_base_component_1_1) {
                news_base_component_1 = news_base_component_1_1;
            },
            function (page_header_component_1_1) {
                page_header_component_1 = page_header_component_1_1;
            },
            function (news_list_component_1_1) {
                news_list_component_1 = news_list_component_1_1;
            }],
        execute: function() {
            NewsDashboardComponent = (function (_super) {
                __extends(NewsDashboardComponent, _super);
                function NewsDashboardComponent(newsService, router) {
                    _super.call(this, router);
                    this._newsService = newsService;
                    this._setHeader('Новости', [
                        {
                            title: 'Добавить свежую!',
                            onClick: this.openNewsEdit
                        }
                    ]);
                }
                NewsDashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/news/list/news-dashboard.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, page_header_component_1.PageHeaderComponent, news_list_component_1.NewsListComponent]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService, router_1.Router])
                ], NewsDashboardComponent);
                return NewsDashboardComponent;
            })(news_base_component_1.NewsBaseComponent);
            exports_1("NewsDashboardComponent", NewsDashboardComponent);
        }
    }
});
//# sourceMappingURL=news-dashboard.component.js.map