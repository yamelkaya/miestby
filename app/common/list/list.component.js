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
                ListComponent.prototype.ngOnChanges = function () {
                    this._loadItems();
                };
                ListComponent.prototype._defaults = function () {
                    this.currentPage = 1;
                    this.pagesTotal = 0;
                    this.itemsPerPage = 10;
                    this.itemsTotal = 0;
                    this.items = [];
                    this.visiblePagesMax = 5;
                };
                ListComponent.prototype._loadItems = function () {
                    var _this = this;
                    this._listService.loadPage(this.source, this.currentPage, this.itemsPerPage).subscribe(function (page) {
                        _this._onItemsLoad(page);
                    }, this);
                };
                ListComponent.prototype._onItemsLoad = function (page) {
                    this.itemsTotal = page.total;
                    this.items = page.items;
                };
                ListComponent.prototype._onPageChange = function (page) {
                    this.currentPage = page;
                    this._loadItems();
                };
                ListComponent.prototype._reloadSource = function (source) {
                    this.source = source;
                    this._loadItems();
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