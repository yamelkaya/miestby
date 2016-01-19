System.register(['../../../../app/common/media/media.model'], function(exports_1) {
    var media_model_1;
    return {
        setters:[
            function (media_model_1_1) {
                media_model_1 = media_model_1_1;
            }],
        execute: function() {
            describe('Media', function () {
                var test = function (url, mediaType) {
                    return function (done) {
                        var media = new media_model_1.Media(url);
                        expect(media.type).toBe(mediaType);
                        done();
                    };
                };
                describe('image source', function () {
                    var imageExtensions = ['png', 'jpg', 'jpeg', 'gif'];
                    for (var _i = 0; _i < imageExtensions.length; _i++) {
                        var extension = imageExtensions[_i];
                        var imageName = "test." + extension;
                        it("should detect " + extension + " images with http", test("http://i.imgur.com/" + imageName, media_model_1.MediaType.Image));
                        it("should detect " + extension + " images with https", test("https://i.imgur.com/" + imageName, media_model_1.MediaType.Image));
                        it("should not detect " + extension + " without http prefix", test("i.imgur.com/" + imageName, media_model_1.MediaType.Unknown));
                    }
                });
                describe('youtube source', function () {
                    var validYoutubeUrls = [
                        'http://www.youtube.com/watch?v=iwGFalTRHDA',
                        'http://www.youtube.com/watch?v=iwGFalTRHDA&feature=related',
                        'http://youtu.be/iwGFalTRHDA',
                        'http://youtu.be/n17B_uFF4cA',
                        'http://www.youtube.com/embed/watch?feature=player_embedded&v=r5nB9u4jjy4',
                        'http://www.youtube.com/watch?v=t-ZRX8984sc',
                        'http://youtu.be/t-ZRX8984sc'
                    ];
                    for (var _i = 0; _i < validYoutubeUrls.length; _i++) {
                        var url = validYoutubeUrls[_i];
                        it("should detect " + url + " format", test(url, media_model_1.MediaType.YoutubeVideo));
                    }
                });
            });
        }
    }
});
//# sourceMappingURL=media.model.spec.js.map