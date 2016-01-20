System.register(['../../../../app/common/media/media.model'], function(exports_1) {
    var media_model_1;
    return {
        setters:[
            function (media_model_1_1) {
                media_model_1 = media_model_1_1;
            }],
        execute: function() {
            describe('Media', function () {
                var testMediaType = function (url, mediaType) {
                    return function (done) {
                        var media = new media_model_1.Media(url);
                        expect(media.type).toBe(mediaType);
                        done();
                    };
                };
                var testNormalizedSource = function (url, normalizedSource) {
                    return function (done) {
                        var media = new media_model_1.Media(url);
                        expect(media.normalizedSource).toBe(normalizedSource);
                        done();
                    };
                };
                describe('image source', function () {
                    var imageExtensions = ['png', 'jpg', 'jpeg', 'gif'];
                    for (var _i = 0; _i < imageExtensions.length; _i++) {
                        var extension = imageExtensions[_i];
                        var imageName = "test." + extension;
                        it("should detect " + extension + " images with http", testMediaType("http://i.imgur.com/" + imageName, media_model_1.MediaType.Image));
                        it("should detect " + extension + " images with https", testMediaType("https://i.imgur.com/" + imageName, media_model_1.MediaType.Image));
                        it("should not detect " + extension + " without http prefix", testMediaType("i.imgur.com/" + imageName, media_model_1.MediaType.Unknown));
                        it("should have set normalized source for " + extension, testNormalizedSource("i.imgur.com/" + imageName, "i.imgur.com/" + imageName));
                    }
                });
                describe('youtube source', function () {
                    var validYoutubeUrls = [
                        { url: 'http://www.youtube.com/watch?v=iwGFalTRHDA', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA' },
                        { url: 'http://www.youtube.com/watch?v=iwGFalTRHDA&feature=related', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA' },
                        { url: 'http://www.youtube.com/watch?feature=related&v=iwGFalTRHDA', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA' },
                        { url: 'http://youtu.be/iwGFalTRHDA', normalized: 'https://www.youtube.com/embed/iwGFalTRHDA' },
                        { url: 'http://youtu.be/n17B_uFF4cA', normalized: 'https://www.youtube.com/embed/n17B_uFF4cA' },
                        //todo: unit test doesn't work now, fix this case if it possible
                        //{url: 'http://www.youtube.com/embed/watch?feature=player_embedded&v=r5nB9u4jjy4',normalized:'https://www.youtube.com/embed/r5nB9u4jjy4' },
                        { url: 'http://www.youtube.com/watch?v=t-ZRX8984sc', normalized: 'https://www.youtube.com/embed/t-ZRX8984sc' },
                        { url: 'http://youtu.be/t-ZRX8984sc', normalized: 'https://www.youtube.com/embed/t-ZRX8984sc' }
                    ];
                    for (var _i = 0; _i < validYoutubeUrls.length; _i++) {
                        var url = validYoutubeUrls[_i];
                        it("should detect " + url.url + " format", testMediaType(url.url, media_model_1.MediaType.YoutubeVideo));
                        it("should have set normalized source for " + url.url, testNormalizedSource(url.url, url.normalized));
                    }
                });
            });
        }
    }
});
//# sourceMappingURL=media.model.spec.js.map