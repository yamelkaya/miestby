System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
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
    var core_1, http_1, Rx_1;
    var Page, ListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
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
                    return Rx_1.Observable.of(new Page(items, total));
                };
                ListService.prototype._loadPageServer = function (source, page, count) {
                    source.headers.set('total', 'true');
                    source.headers.set('page', page.toString());
                    source.headers.set('count', count.toString());
                    return this._http.request(source).flatMap(function (res) {
                        if (res.statusText == 'Ok') {
                            var data = res.json();
                            return Rx_1.Observable.of(new Page(data.items, data.total));
                        }
                        else {
                            return Rx_1.Observable.of(new Page([], 0));
                        }
                    });
                };
                ListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListService);
                return ListService;
            })();
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list.service.js.map