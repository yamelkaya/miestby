System.register([], function(exports_1) {
    var NewsBaseComponent;
    return {
        setters:[],
        execute: function() {
            class NewsBaseComponent {
                constructor(router) {
                    this._router = router;
                    this.header = {};
                }
                get header() { return this._header; }
                set header(value) { this._header = value; }
                openNewsEdit(id) {
                    this._navigate('NewsEdit', id ? { id: id } : undefined);
                }
                openNewsDetails(id) {
                    this._navigate('NewsDetail', id ? { id: id } : undefined);
                }
                _navigate(routeName, params) {
                    this._router.navigate([routeName, params]);
                }
                _setHeader(title, controls) {
                    this.header = {
                        title: title,
                        controls: controls
                    };
                }
            }
            NewsBaseComponent = NewsBaseComponent;
        }
    }
});
//# sourceMappingURL=news-base.component.js.map