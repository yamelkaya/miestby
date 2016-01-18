System.register(['angular2/http', 'rxjs/Observable'], function(exports_1) {
    var http_1, Observable_1;
    var Page, ListService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            Page = (function () {
                function Page(items, total) {
                    this.items = items;
                    this.total = total;
                }
                return Page;
            })();
            exports_1("Page", Page);
            ListService = (function () {
                function ListService(http) {
                    this._http = http;
                }
                ListService.prototype.loadPage = function (source, page, count) {
                    if (!source)
                        return;
                    if (source instanceof Array) {
                        return this._loadPageClient(source, page, count);
                    }
                    else if (source instanceof http_1.Request) {
                        return this._loadPageServer(source, page, count);
                    }
                    else {
                        throw Error(source + " is unknown source type");
                    }
                };
                ListService.prototype._loadPageClient = function (source, page, count) {
                    var total = source.length;
                    var items = source.slice((page - 1) * count, page * count);
                    return Observable_1.Observable.of(new Page(items, total));
                };
                ListService.prototype._loadPageServer = function (source, page, count) {
                    source.headers.set('total', 'true');
                    source.headers.set('page', page.toString());
                    source.headers.set('count', count.toString());
                    return this._http.request(source).flatMap(function (res) {
                        if (res.statusText == 'Ok') {
                            var data = res.json();
                            return Observable_1.Observable.of(new Page(data.items, data.total));
                        }
                        else {
                            return Observable_1.Observable.of(new Page([], 0));
                        }
                    });
                };
                return ListService;
            })();
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list.service.js.map