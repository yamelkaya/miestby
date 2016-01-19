System.register([], function(exports_1) {
    var MediaType, Media;
    return {
        setters:[],
        execute: function() {
            (function (MediaType) {
                MediaType[MediaType["Unknown"] = 0] = "Unknown";
                MediaType[MediaType["YoutubeVideo"] = 1] = "YoutubeVideo";
                MediaType[MediaType["Image"] = 2] = "Image";
            })(MediaType || (MediaType = {}));
            exports_1("MediaType", MediaType);
            Media = (function () {
                function Media(source) {
                    this.source = source;
                }
                Object.defineProperty(Media.prototype, "type", {
                    //todo: may it cause bad performance?
                    get: function () {
                        if (this._isImage(this.source)) {
                            return MediaType.Image;
                        }
                        if (this._isYoutubeSource(this.source)) {
                            return MediaType.YoutubeVideo;
                        }
                        return MediaType.Unknown;
                    },
                    enumerable: true,
                    configurable: true
                });
                Media.prototype._isImage = function (source) {
                    var regexp = /http(?:s?):\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|jpeg|gif|png)/;
                    return regexp.test(source);
                };
                Media.prototype._isYoutubeSource = function (source) {
                    var regexp = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
                    return regexp.test(source);
                };
                return Media;
            })();
            exports_1("Media", Media);
        }
    }
});
//# sourceMappingURL=media.model.js.map