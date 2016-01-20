System.register(['angular2/core', './../news.service', "../../../app/common/list/list.service", "../../../app/common/routing.service", '../../common/list/list.component', '../../common/list/pager.component', '../../pipes/date-moment.pipe', "../../../app/common/media/media-item.component"], function(exports_1) {
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
    var core_1, news_service_1, list_service_1, routing_service_1, list_component_1, pager_component_1, date_moment_pipe_1, media_item_component_1;
    var NewsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            },
            function (date_moment_pipe_1_1) {
                date_moment_pipe_1 = date_moment_pipe_1_1;
            },
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            }],
        execute: function() {
            NewsListComponent = (function (_super) {
                __extends(NewsListComponent, _super);
                function NewsListComponent(newsService, listService, routingService) {
                    _super.call(this, listService);
                    this._newsService = newsService;
                    this._routingService = routingService;
                    this.itemsPerPage = 6;
                }
                NewsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._newsService.getNews(null).then(function (news) {
                        _this._reloadSource(news);
                    });
                };
                NewsListComponent.prototype.deleteItem = function (id) {
                };
                NewsListComponent.prototype.editItem = function (id) {
                    this._routingService.openNewsEdit(id);
                };
                NewsListComponent.prototype.addItem = function () {
                    this._routingService.openNewsEdit(null);
                };
                NewsListComponent.prototype.viewItem = function (id) {
                    this._routingService.openNewsDetails(id);
                };
                NewsListComponent = __decorate([
                    core_1.Component({
                        selector: 'news-list',
                        templateUrl: 'app/news/list/news-list.component.html',
                        directives: [list_component_1.ListComponent, pager_component_1.Pager, media_item_component_1.MediaItemComponent],
                        pipes: [date_moment_pipe_1.DateMomentPipe],
                        providers: [list_service_1.ListService]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService, list_service_1.ListService, routing_service_1.RoutingService])
                ], NewsListComponent);
                return NewsListComponent;
            })(list_component_1.ListComponent);
            exports_1("NewsListComponent", NewsListComponent);
        }
    }
});
//# sourceMappingURL=news-list.component.js.map