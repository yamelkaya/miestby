System.register(['angular2/core', 'angular2/router', './news.service', './news-base.component', '../pipes/date-moment.pipe', '../common/page-header.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, news_service_1, news_base_component_1, date_moment_pipe_1, page_header_component_1;
    var NewsDetailComponent;
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
            function (date_moment_pipe_1_1) {
                date_moment_pipe_1 = date_moment_pipe_1_1;
            },
            function (page_header_component_1_1) {
                page_header_component_1 = page_header_component_1_1;
            }],
        execute: function() {
            let NewsDetailComponent = class extends news_base_component_1.NewsBaseComponent {
                constructor(newsService, routeParams, router) {
                    super(router);
                    this._newsService = newsService;
                    this._routeParams = routeParams;
                    this._id = routeParams.get('id');
                    this.item = {};
                }
                get item() { return this._item; }
                set item(value) { this._item = value; }
                ngOnInit() {
                    let self = this;
                    this._newsService.getNews(this._id).then(i => self._setNewsInfo(i));
                }
                _setNewsInfo(item) {
                    this.item = item;
                    this._setHeader(item.title, [
                        {
                            title: 'Редактрировать',
                            onClick: () => { this.openNewsEdit(this._id); }
                        }
                    ]);
                }
            };
            NewsDetailComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/news/news-detail.component.html',
                    providers: [news_service_1.NewsService, router_1.RouteParams, router_1.Router],
                    pipes: [date_moment_pipe_1.DateMomentPipe],
                    directives: [page_header_component_1.PageHeaderComponent]
                }), 
                __metadata('design:paramtypes', [Object, Object, Object])
            ], NewsDetailComponent);
            NewsDetailComponent = NewsDetailComponent;
        }
    }
});
//# sourceMappingURL=news-detail.component.js.map