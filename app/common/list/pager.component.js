System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var Pager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Pager = (function () {
                function Pager() {
                    this._defaults();
                }
                Object.defineProperty(Pager.prototype, "visiblePages", {
                    get: function () {
                        return this._visiblePages;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Pager.prototype, "pagesTotal", {
                    get: function () {
                        return this._pagesTotal;
                    },
                    enumerable: true,
                    configurable: true
                });
                Pager.prototype.ngOnChanges = function () {
                    this._init();
                };
                Pager.prototype.goToNext = function () {
                    if (this._canGoToNext()) {
                        this.currentPage++;
                        this._onPageChange();
                    }
                };
                Pager.prototype.goToPrev = function () {
                    if (this._canGoToPrev()) {
                        this.currentPage--;
                        this._onPageChange();
                    }
                };
                Pager.prototype.goToPage = function (page) {
                    if (!this._isCurrentPage(page) && this._isPageValid(page)) {
                        this.currentPage = page;
                        this._onPageChange();
                    }
                };
                Pager.prototype._defaults = function () {
                    this.visiblePagesMax = 5;
                    this.items = [];
                    this.itemsTotal = 0;
                    this.itemsPerPage = 0;
                    this.currentPage = 1;
                    this.onPageChange = new core_1.EventEmitter();
                };
                Pager.prototype._init = function () {
                    if (this.itemsPerPage != 0 && this.itemsTotal != 0) {
                        this._pagesTotal = Math.ceil(this.itemsTotal / this.itemsPerPage);
                        this._updateVisiblePages();
                    }
                };
                Pager.prototype._onPageChange = function () {
                    this.onPageChange.emit(this.currentPage);
                };
                Pager.prototype._isCurrentPage = function (page) {
                    return page == this.currentPage;
                };
                Pager.prototype._isPageValid = function (page) {
                    return Number.isInteger(page) && 1 <= page && page <= this.pagesTotal;
                };
                Pager.prototype._canGoToPrev = function () {
                    return this.currentPage > 1;
                };
                Pager.prototype._canGoToNext = function () {
                    return this.currentPage < this.pagesTotal;
                };
                Pager.prototype._updateVisiblePages = function () {
                    var surroundPages = Math.floor((this.visiblePagesMax - 1) / 2);
                    var even = this.visiblePagesMax % 2 == 0;
                    this._visiblePages = this._generatePages(this.currentPage - surroundPages, this.currentPage + surroundPages + (even ? 1 : 0));
                };
                Pager.prototype._generatePages = function (start, end) {
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
                    __metadata('design:type', Number)
                ], Pager.prototype, "currentPage");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pager.prototype, "itemsPerPage");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pager.prototype, "visiblePagesMax");
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Pager.prototype, "onPageChange");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Pager.prototype, "items");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pager.prototype, "itemsTotal");
                Pager = __decorate([
                    core_1.Component({
                        selector: 'list-pager',
                        templateUrl: 'app/common/list/pager.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], Pager);
                return Pager;
            })();
            exports_1("Pager", Pager);
        }
    }
});
//# sourceMappingURL=pager.component.js.map