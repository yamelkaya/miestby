System.register(["angular2/core", "./image.service"], function(exports_1) {
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
    var core_1, image_service_1;
    var ImageUploaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (image_service_1_1) {
                image_service_1 = image_service_1_1;
            }],
        execute: function() {
            ImageUploaderComponent = (function () {
                function ImageUploaderComponent(imageService) {
                    this._imageService = imageService;
                    this._defaults();
                }
                Object.defineProperty(ImageUploaderComponent.prototype, "empty", {
                    get: function () {
                        return this._sourceUrl == null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageUploaderComponent.prototype, "source", {
                    get: function () {
                        return this._sourceUrl;
                    },
                    set: function (value) {
                        this._sourceUrl = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageUploaderComponent.prototype, "_sourceInternal", {
                    get: function () {
                        return this._changed ?
                            this._sourceBase64 :
                            this._sourceUrl;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageUploaderComponent.prototype, "_changed", {
                    get: function () {
                        return this._sourceBase64 != null;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImageUploaderComponent.prototype.add = function () {
                };
                ImageUploaderComponent.prototype.clear = function () {
                };
                ImageUploaderComponent.prototype.edit = function () {
                };
                ImageUploaderComponent.prototype.save = function () {
                    if (this._changed) {
                        this._imageService.upload(this._sourceBase64);
                    }
                };
                ImageUploaderComponent.prototype._defaults = function () {
                    this._sourceUrl = null;
                    this._sourceBase64 = null;
                };
                ImageUploaderComponent = __decorate([
                    core_1.Component({
                        selector: 'image-upload',
                        providers: [image_service_1.ImageService]
                    }), 
                    __metadata('design:paramtypes', [image_service_1.ImageService])
                ], ImageUploaderComponent);
                return ImageUploaderComponent;
            })();
            exports_1("ImageUploaderComponent", ImageUploaderComponent);
        }
    }
});
//# sourceMappingURL=image-uploader.component.js.map