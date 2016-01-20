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
                Object.defineProperty(Media.prototype, "source", {
                    get: function () {
                        return this._source;
                    },
                    set: function (value) {
                        this._source = value;
                        this._type = this._getMediaType(value);
                        this._normalizedSource = this._getNormalizedSource(value, this._type);
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(Media.prototype, "type", {
                    //todo: may it cause bad performance?
                    get: function () {
                        return this._type;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Media.prototype, "normalizedSource", {
                    get: function () {
                        return this._normalizedSource;
                    },
                    enumerable: true,
                    configurable: true
                });
                Media.prototype._getMediaType = function (source) {
                    if (this._isImage(source)) {
                        return MediaType.Image;
                    }
                    if (this._isYoutubeSource(source)) {
                        return MediaType.YoutubeVideo;
                    }
                    return MediaType.Unknown;
                };
                Media.prototype._isImage = function (source) {
                    var regexp = /http(?:s?):\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|jpeg|gif|png)/;
                    return regexp.test(source);
                };
                Media.prototype._isYoutubeSource = function (source) {
                    var regexp = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
                    return regexp.test(source);
                };
                Media.prototype._getNormalizedSource = function (source, type) {
                    switch (type) {
                        case MediaType.YoutubeVideo:
                            return "https://www.youtube.com/embed/" + this._getYoutubeVideoId(source);
                        case MediaType.Image:
                        default:
                            return source;
                    }
                };
                Media.prototype._getYoutubeVideoId = function (url) {
                    var id = '';
                    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                    if (url[2] !== undefined) {
                        id = url[2].split(/[^0-9a-z_\-]/i);
                        id = id[0];
                    }
                    else {
                        id = url;
                    }
                    return id;
                };
                return Media;
            })();
            exports_1("Media", Media);
        }
    }
});
//# sourceMappingURL=media.model.js.map