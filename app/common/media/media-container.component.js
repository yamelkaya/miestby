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
    var MediaContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MediaContainerComponent = (function () {
                function MediaContainerComponent() {
                    this.items = [];
                }
                MediaContainerComponent.prototype.addItem = function (mediaItem) {
                    var _this = this;
                    mediaItem.select.subscribe(function (selectedItem) {
                        _this.selectedItem = selectedItem;
                        _this._selectedIndex = _this.items.indexOf(_this.selectedItem);
                    });
                    this.items.push(mediaItem);
                };
                MediaContainerComponent.prototype.selectNext = function () {
                    if (this._canSelectNext()) {
                        this.selectedItem.zoomOut();
                        this.items[this._selectedIndex + 1].zoomIn();
                    }
                };
                MediaContainerComponent.prototype.selectPrev = function () {
                    if (this._canSelectPrev()) {
                        this.selectedItem.zoomOut();
                        this.items[this._selectedIndex - 1].zoomIn();
                    }
                };
                MediaContainerComponent.prototype._canSelectNext = function () {
                    return this._selectedIndex < this.items.length - 1;
                };
                MediaContainerComponent.prototype._canSelectPrev = function () {
                    return this._selectedIndex > 0;
                };
                MediaContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'media-container'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MediaContainerComponent);
                return MediaContainerComponent;
            })();
            exports_1("MediaContainerComponent", MediaContainerComponent);
        }
    }
});
//# sourceMappingURL=media-container.component.js.map