System.register(['angular2/core', 'angular2/http'], function(exports_1) {
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
    var core_1, http_1;
    var ListPagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ListPagerComponent = (function () {
                function ListPagerComponent(http) {
                    this._http = http;
                    this._defaults();
                }
                ListPagerComponent.prototype.ngOnInit = function () {
                    this._init();
                };
                ListPagerComponent.prototype.ngOnChanges = function () {
                    this._loadItems();
                };
                ListPagerComponent.prototype.goToNext = function () {
                    if (this._canGoToNext()) {
                        this.currentPage++;
                        this._onPageChange();
                    }
                };
                ListPagerComponent.prototype.goToPrev = function () {
                    if (this._canGoToPrev()) {
                        this.currentPage--;
                        this._onPageChange();
                    }
                };
                ListPagerComponent.prototype.goToPage = function (page) {
                    if (!this._isCurrentPage(page) && this._isPageValid(page)) {
                        this.currentPage = page;
                        this._onPageChange();
                    }
                };
                ListPagerComponent.prototype.filter = function (text) {
                };
                ListPagerComponent.prototype._defaults = function () {
                    this.currentPage = 1;
                    this.pagesTotal = 0;
                    this.itemsPerPage = 10;
                    this.itemsTotal = 0;
                    this.items = [];
                    this.visiblePagesMax = 5;
                };
                ListPagerComponent.prototype._init = function () {
                    this._loadItems();
                };
                ListPagerComponent.prototype._loadItems = function () {
                    var _this = this;
                    if (!this.source)
                        return;
                    if (this.source instanceof Array) {
                        this._onItemsLoad(this.source, this.source.length);
                    }
                    else if (this.source instanceof http_1.Request) {
                        this.source.headers.set('total', true);
                        this._http.request(this.source).subscribe(function (res) {
                            if (res.statusText == 'Ok') {
                                var data = res.json();
                                _this._onItemsLoad(data.items, data.total);
                            }
                            else {
                                throw Error(res.text());
                            }
                        });
                    }
                    else {
                        throw Error(this.source + " is unknown source type");
                    }
                };
                ListPagerComponent.prototype._onItemsLoad = function (items, total) {
                    this.itemsTotal = total;
                    this.items = items.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
                    this.pagesTotal = Math.ceil(total / this.itemsPerPage);
                    this._updateVisiblePages();
                    if (this.onItemsLoad) {
                        this.onItemsLoad(this.items, total);
                    }
                };
                ListPagerComponent.prototype._onPageChange = function () {
                    this._loadItems();
                    if (this.onPageChange) {
                        this.onPageChange(this.currentPage);
                    }
                };
                ListPagerComponent.prototype._isCurrentPage = function (page) {
                    return page == this.currentPage;
                };
                ListPagerComponent.prototype._isPageValid = function (page) {
                    return Number.isInteger(page) && 1 <= page && page <= this.pagesTotal;
                };
                ListPagerComponent.prototype._canGoToPrev = function () {
                    return this.currentPage > 1;
                };
                ListPagerComponent.prototype._canGoToNext = function () {
                    return this.currentPage < this.pagesTotal;
                };
                ListPagerComponent.prototype._updateVisiblePages = function () {
                    var surroundPages = Math.floor(this.visiblePagesMax / 2);
                    this.visiblePages = this._generatePages(this.currentPage - surroundPages, this.currentPage + surroundPages);
                };
                ListPagerComponent.prototype._generatePages = function (start, end) {
                    var list = [], actualStart = start, actualEnd = end;
                    var overflowLeft = 1 - start;
                    if (overflowLeft > 0) {
                        actualStart = 1;
                        actualEnd = Math.min(actualEnd + overflowLeft, this.pagesTotal);
                    }
                    else {
                        var overflowRight = end - this.pagesTotal;
                        if (overflowRight > 0) {
                            actualEnd = this.pagesTotal;
                            actualStart = Math.max(1, actualStart - overflowRight);
                        }
                    }
                    for (var i = actualStart; i <= actualEnd; i++) {
                        list.push(i);
                    }
                    return list;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListPagerComponent.prototype, "currentPage");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListPagerComponent.prototype, "itemsPerPage");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListPagerComponent.prototype, "source");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListPagerComponent.prototype, "visiblePagesMax");
                ListPagerComponent = __decorate([
                    core_1.Component({
                        selector: 'list-pager',
                        templateUrl: 'app/common/list-pager.component.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListPagerComponent);
                return ListPagerComponent;
            })();
            exports_1("ListPagerComponent", ListPagerComponent);
        }
    }
});
//# sourceMappingURL=list-pager.component.js.map