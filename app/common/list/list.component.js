System.register(['angular2/core', "./list.service"], function(exports_1) {
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
    var core_1, list_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(listService) {
                    this._listService = listService;
                    this._defaults();
                }
                Object.defineProperty(ListComponent.prototype, "items", {
                    get: function () {
                        return this._items;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListComponent.prototype, "itemsTotal", {
                    get: function () {
                        return this._itemsTotal;
                    },
                    enumerable: true,
                    configurable: true
                });
                ListComponent.prototype.ngOnChanges = function () {
                    this._loadItems();
                };
                ListComponent.prototype._defaults = function () {
                    this.currentPage = 1;
                    this.itemsPerPage = 10;
                    this._itemsTotal = 0;
                    this._items = [];
                    this.visiblePagesMax = 5;
                    this.itemsLoad = new core_1.EventEmitter();
                };
                ListComponent.prototype._onPageChange = function (page) {
                    this.currentPage = page;
                    this._loadItems();
                };
                ListComponent.prototype._reloadSource = function (source) {
                    this.source = source;
                    this._loadItems();
                };
                ListComponent.prototype._loadItems = function () {
                    var _this = this;
                    this._listService.loadPage(this.source, this.currentPage, this.itemsPerPage).subscribe(function (page) {
                        _this._onItemsLoad(page);
                    }, this);
                };
                ListComponent.prototype._onItemsLoad = function (page) {
                    this._itemsTotal = page.total;
                    this._items = page.items;
                    this.itemsLoad.emit(page);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ListComponent.prototype, "currentPage");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ListComponent.prototype, "itemsPerPage");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListComponent.prototype, "source");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ListComponent.prototype, "visiblePagesMax");
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ListComponent.prototype, "itemsLoad");
                ListComponent = __decorate([
                    core_1.Component({
                        template: '<div></div>',
                    }), 
                    __metadata('design:paramtypes', [list_service_1.ListService])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map