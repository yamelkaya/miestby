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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var news_service_1 = require('./news.service');
var news_base_component_1 = require('./news-base.component');
var date_moment_pipe_1 = require('../pipes/date-moment.pipe');
var page_header_component_1 = require('../common/page-header.component');
var NewsDetailComponent = (function (_super) {
    __extends(NewsDetailComponent, _super);
    function NewsDetailComponent(newsService, routeParams, router) {
        _super.call(this, router);
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
        this._newsService.getNews(this._id).then(function (i) { return self._setNewsInfo(i); });
    };
    NewsDetailComponent.prototype._setNewsInfo = function (item) {
        var _this = this;
        this.item = item;
        this._setHeader(item.title, [
            {
                title: 'Редактировать',
                onClick: function () { _this.openNewsEdit(_this._id); }
            }
        ]);
    };
    NewsDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/news/news-detail.component.html',
            pipes: [date_moment_pipe_1.DateMomentPipe],
            directives: [page_header_component_1.PageHeaderComponent]
        }), 
        __metadata('design:paramtypes', [news_service_1.NewsService, (typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], NewsDetailComponent);
    return NewsDetailComponent;
    var _a, _b;
})(news_base_component_1.NewsBaseComponent);
exports.NewsDetailComponent = NewsDetailComponent;
//# sourceMappingURL=news-detail.component.js.map