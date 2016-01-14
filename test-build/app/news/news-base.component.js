var NewsBaseComponent = (function () {
    function NewsBaseComponent(router) {
        this._router = router;
        this.header = {};
    }
    Object.defineProperty(NewsBaseComponent.prototype, "header", {
        get: function () { return this._header; },
        set: function (value) { this._header = value; },
        enumerable: true,
        configurable: true
    });
    NewsBaseComponent.prototype.openNewsEdit = function (id) {
        this._navigate('NewsEdit', id ? { id: id } : undefined);
    };
    NewsBaseComponent.prototype.openNewsDetails = function (id) {
        this._navigate('NewsDetail', id ? { id: id } : undefined);
    };
    NewsBaseComponent.prototype._navigate = function (routeName, params) {
        this._router.navigate([routeName, params]);
    };
    NewsBaseComponent.prototype._setHeader = function (title, controls) {
        this.header = {
            title: title,
            controls: controls
        };
    };
    return NewsBaseComponent;
})();
exports.NewsBaseComponent = NewsBaseComponent;
//# sourceMappingURL=news-base.component.js.map