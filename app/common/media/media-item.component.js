System.register(['angular2/core', "./media.model"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, media_model_1;
    var MediaItemComponent, ImageItemComponent, VideoItemComponent, MediaItemBaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_model_1_1) {
                media_model_1 = media_model_1_1;
            }],
        execute: function() {
            MediaItemComponent = (function (_super) {
                __extends(MediaItemComponent, _super);
                function MediaItemComponent() {
                    _super.apply(this, arguments);
                }
                MediaItemComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MediaItemComponent);
                return MediaItemComponent;
            })(MediaItemBaseComponent);
            exports_1("MediaItemComponent", MediaItemComponent);
            ImageItemComponent = (function (_super) {
                __extends(ImageItemComponent, _super);
                function ImageItemComponent() {
                    _super.apply(this, arguments);
                }
                ImageItemComponent = __decorate([
                    core_1.Component({
                        selector: 'image-item'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImageItemComponent);
                return ImageItemComponent;
            })(MediaItemBaseComponent);
            exports_1("ImageItemComponent", ImageItemComponent);
            VideoItemComponent = (function (_super) {
                __extends(VideoItemComponent, _super);
                function VideoItemComponent() {
                    _super.apply(this, arguments);
                }
                VideoItemComponent = __decorate([
                    core_1.Component({
                        selector: 'video-item'
                    }), 
                    __metadata('design:paramtypes', [])
                ], VideoItemComponent);
                return VideoItemComponent;
            })(MediaItemBaseComponent);
            exports_1("VideoItemComponent", VideoItemComponent);
            MediaItemBaseComponent = (function () {
                function MediaItemBaseComponent(mediaContainer) {
                    if (mediaContainer) {
                        mediaContainer.addItem(this);
                    }
                }
                MediaItemBaseComponent.prototype.ngOnChanges = function () {
                    this._media = new media_model_1.Media(this.source);
                };
                MediaItemBaseComponent.prototype.zoomIn = function () {
                    this._preview = false;
                    this.select.emit(this);
                };
                MediaItemBaseComponent.prototype.zoomOut = function () {
                    this._preview = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MediaItemBaseComponent.prototype, "source");
                return MediaItemBaseComponent;
            })();
            exports_1("MediaItemBaseComponent", MediaItemBaseComponent);
        }
    }
});
//# sourceMappingURL=media-item.component.js.map