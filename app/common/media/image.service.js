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
    var ImageService;
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
            ImageService = (function () {
                function ImageService(http) {
                    this._host = 'https://api.imgur.com';
                    this._usersAlbumId = 'e614D';
                    this._newsAlbumId = '6ffHE';
                    this._clientId = 'e93f60e23a23c87';
                    this._clientSecret = '99c27868c333fceb1ebe6adbde0e86737ff61d36';
                    this._albumId = 'IQTAn';
                    this._http = http;
                }
                Object.defineProperty(ImageService.prototype, "_albumApiPath", {
                    get: function () {
                        return this._host + '/3/album';
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(ImageService.prototype, "_imageApiPath", {
                    get: function () {
                        return this._host + '/3/image';
                    },
                    enumerable: true,
                    configurable: true
                });
                ImageService.prototype.upload = function (imgBase64) {
                    return this._http
                        .post(this._imageApiPath, this._prepareImageBody(imgBase64), this._prepareImageOptions())
                        .map(function (res) {
                        var data = res.json().data;
                        return {
                            id: data.id,
                            link: data.link,
                            deletehash: data.deletehash
                        };
                    });
                };
                ImageService.prototype.delete = function (id) {
                    return this._http
                        .delete(this._imageApiPath + ("/" + id), this._prepareImageOptions())
                        .flatMap(function (res) {
                        if (res.statusText == 'Ok') {
                            var data = res.json();
                            return Rx_1.Observable.of(data);
                        }
                        else {
                            return Rx_1.Observable.of(null);
                        }
                    });
                };
                ImageService.prototype._prepareImageBody = function (imgBase64) {
                    imgBase64 = imgBase64.replace(/^data:image\/\w+;base64,/, "");
                    var body = "image=" + imgBase64 + "}";
                    return body;
                };
                ImageService.prototype._prepareImageOptions = function () {
                    return {
                        headers: new http_1.Headers({
                            'Authorization': 'Client-ID ' + this._clientId,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        })
                    };
                };
                ImageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ImageService);
                return ImageService;
            })();
            exports_1("ImageService", ImageService);
        }
    }
});
//# sourceMappingURL=image.service.js.map