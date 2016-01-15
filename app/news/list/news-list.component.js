System.register(['angular2/core', 'angular2/router', './../news.service', './../news-base.component', '../../common/page-header.component', '../../common/list-pager/list-pager.component', '../../pipes/date-moment.pipe'], function(exports_1) {
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
    var core_1, router_1, news_service_1, news_base_component_1, page_header_component_1, list_pager_component_1, date_moment_pipe_1;
    var NewsListComponent;
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
            function (list_pager_component_1_1) {
                list_pager_component_1 = list_pager_component_1_1;
            },
            function (date_moment_pipe_1_1) {
                date_moment_pipe_1 = date_moment_pipe_1_1;
            }],
        execute: function() {
            NewsListComponent = (function (_super) {
                __extends(NewsListComponent, _super);
                function NewsListComponent(newsService, router) {
                    _super.call(this, router);
                    this._newsService = newsService;
                    this.news = [];
                    this._setHeader('Новости', [
                        {
                            title: 'Добавить свежую!',
                            onClick: this.openNewsEdit
                        }
                    ]);
                }
                NewsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._newsService.getNews().then(function (news) {
                        _this.news = news;
                    });
                };
                NewsListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/news/list/news-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, page_header_component_1.PageHeaderComponent, list_pager_component_1.ListPagerComponent],
                        pipes: [date_moment_pipe_1.DateMomentPipe]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService, router_1.Router])
                ], NewsListComponent);
                return NewsListComponent;
            })(news_base_component_1.NewsBaseComponent);
            exports_1("NewsListComponent", NewsListComponent);
        }
    }
});
//# sourceMappingURL=news-list.component.js.map