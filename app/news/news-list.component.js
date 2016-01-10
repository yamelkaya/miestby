System.register(['angular2/core', 'angular2/router', './news.service', './news-base.component', '../common/page-header.component', '../common/list-pager.component', '../pipes/date-moment.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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
            let NewsListComponent = class extends news_base_component_1.NewsBaseComponent {
                constructor(newsService, router) {
                    super(router);
                    this._newsService = newsService;
                    this.news = [];
                    this._setHeader('Новости', [
                        {
                            title: 'Добавить свежую!',
                            onClick: this.openNewsEdit
                        }
                    ]);
                }
                ngOnInit() {
                    this._newsService.getNews().then((news) => {
                        this.news = news;
                    });
                }
            };
            NewsListComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/news/news-list.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, page_header_component_1.PageHeaderComponent, list_pager_component_1.ListPagerComponent],
                    providers: [news_service_1.NewsService, router_1.Router],
                    pipes: [date_moment_pipe_1.DateMomentPipe]
                }), 
                __metadata('design:paramtypes', [Object, Object])
            ], NewsListComponent);
            NewsListComponent = NewsListComponent;
        }
    }
});
//# sourceMappingURL=news-list.component.js.map