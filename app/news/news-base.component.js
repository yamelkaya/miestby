System.register([], function(exports_1) {
    var NewsBaseComponent;
    return {
        setters:[],
        execute: function() {
            NewsBaseComponent = (function () {
                function NewsBaseComponent(routingService) {
                    this.header = {};
                    this._routingService = routingService;
                }
                Object.defineProperty(NewsBaseComponent.prototype, "header", {
                    get: function () { return this._header; },
                    set: function (value) { this._header = value; },
                    enumerable: true,
                    configurable: true
                });
                NewsBaseComponent.prototype._setHeader = function (title, controls) {
                    this.header = {
                        title: title,
                        controls: controls
                    };
                };
                return NewsBaseComponent;
            })();
            exports_1("NewsBaseComponent", NewsBaseComponent);
        }
    }
});
//# sourceMappingURL=news-base.component.js.map