System.register(['angular2/core', 'angular2/router', './../news.service', '../../common/routing.service', './../news-base.component', '../../pipes/date-moment.pipe', '../../common/page-header.component', "../../common/media/media-item.component", "../../common/media/media-container.component", '../../common/media/image-uploader.component'], function(exports_1) {
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
    var core_1, router_1, news_service_1, routing_service_1, news_base_component_1, date_moment_pipe_1, page_header_component_1, media_item_component_1, media_container_component_1, image_uploader_component_1;
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
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (news_base_component_1_1) {
                news_base_component_1 = news_base_component_1_1;
            },
            function (date_moment_pipe_1_1) {
                date_moment_pipe_1 = date_moment_pipe_1_1;
            },
            function (page_header_component_1_1) {
                page_header_component_1 = page_header_component_1_1;
            },
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (media_container_component_1_1) {
                media_container_component_1 = media_container_component_1_1;
            },
            function (image_uploader_component_1_1) {
                image_uploader_component_1 = image_uploader_component_1_1;
            }],
        execute: function() {
            NewsDetailComponent = (function (_super) {
                __extends(NewsDetailComponent, _super);
                function NewsDetailComponent(newsService, routeParams, routingService) {
                    _super.call(this, routingService);
                    this._newsService = newsService;
                    this._routeParams = routeParams;
                    this._id = routeParams.get('id');
                    this.item = {};
                }
                Object.defineProperty(NewsDetailComponent.prototype, "item", {
                    get: function () { return this._item; },
                    set: function (value) { this._item = value; },
                    enumerable: true,
                    configurable: true
                });
                NewsDetailComponent.prototype.ngOnInit = function () {
                    var self = this;
                    this._newsService.getNews(this._id).subscribe(function (i) { return self._setNewsInfo(i); });
                };
                NewsDetailComponent.prototype._setNewsInfo = function (item) {
                    var _this = this;
                    this.item = item;
                    this._setHeader(item.title, [
                        {
                            title: 'Редактировать',
                            onClick: function () { _this._routingService.openNewsEdit(_this._id); }
                        }
                    ]);
                };
                NewsDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/news/detail/news-detail.component.html',
                        pipes: [date_moment_pipe_1.DateMomentPipe],
                        directives: [page_header_component_1.PageHeaderComponent, media_item_component_1.MediaItemComponent, media_container_component_1.MediaContainerComponent, media_item_component_1.ImageItemComponent, media_item_component_1.VideoItemComponent, image_uploader_component_1.ImageUploaderComponent]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService, router_1.RouteParams, routing_service_1.RoutingService])
                ], NewsDetailComponent);
                return NewsDetailComponent;
            })(news_base_component_1.NewsBaseComponent);
            exports_1("NewsDetailComponent", NewsDetailComponent);
        }
    }
});
//# sourceMappingURL=news-detail.component.js.map