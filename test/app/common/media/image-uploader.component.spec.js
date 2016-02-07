System.register(['../../../../app/common/media/image-uploader.component', '../../../../app/common/media/image.service', 'angular2/core', 'rxjs/Rx'], function(exports_1) {
    var image_uploader_component_1, image_service_1, core_1, Rx_1;
    var ImageServiceMock;
    return {
        setters:[
            function (image_uploader_component_1_1) {
                image_uploader_component_1 = image_uploader_component_1_1;
            },
            function (image_service_1_1) {
                image_service_1 = image_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ImageServiceMock = (function () {
                function ImageServiceMock() {
                }
                ImageServiceMock.prototype.upload = function () {
                    return Rx_1.Observable.of('http://link.png');
                };
                return ImageServiceMock;
            })();
            describe('ImageUploader', function () {
                var imageUploder;
                beforeEach(function (done) {
                    var injector = core_1.Injector.resolveAndCreate([
                        core_1.provide(image_service_1.ImageService, {
                            useClass: ImageServiceMock
                        }),
                        image_uploader_component_1.ImageUploaderComponent
                    ]);
                    imageUploder = injector.get(image_uploader_component_1.ImageUploaderComponent);
                    done();
                });
                fit('should save base64 image', function (done) {
                    imageUploder._sourceBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMoSURBVDjLndPLb5RVHMbx5515pxfnnaadQi9MSykzRSFSqyWjITVoUIMhLmClLky6YcempKBGgitDJEgaIlVjMGkkLkCqIUTjyo7YQs00dYYZpsNoufReaWn7nvM757yX4wJJJBoXfv+AT57NY2it8bBT2fct6aoeodQeoSgplISQYpSE+i6onv2gWr9e/tEbMY6/ZTwETmaO7ZKO+uKZ6q7WoFkBx/BQV7keN6fyuJj7qj9mfJJVjturlNf9+YH40CPAiV+P7tsYSlysDW/AtLqHcTuPoA5gp/U0zl39bKnS3ZeMGC+NJhNWNHdrFbdn7f3nD7cPAkDgw/GjUaHEQJ21EWN2Ean7I7jvrCBR2YL5ubtgjN4L692HttRVROtrKtDWaIFIDbzy9nAUAAJcUk9n9S6rRFPI8wlwV2B9MApLhPBN5sJ4LHj6miDnQKI5jMKMQLSqHG1NEUtw6vkLYHuDoXJk7QKUK1EVsNBe9QRGiz+D1sRBR5p9HZsjQeX4mLqnUJyTaKgNQ5DYCwAmJ7FNGi4CMNBhPYlN5THc+b2EdCl9tjUysIFIdsZqKzFS5ODMA1v1sDUWghTUCgAmI071FevKuiI7MD9zF/1jJ5ckU33Hll87M7GSNn8IP15aWBbbTRjgzIf2fUhlQpEIPljAafKXG8Mdl64PLkqSxw/PNp3fvRR+S/PcxPM8/cKlbb0Q0gPnGsQ81NaEML1gQ0kqPQAYfflt5uv+U1Ntl7esBHs0p7yzudkyir/BX7NBRODCA3ENYbtojj+G4aslOJIuA4A5WOo4qzkd15xOO/GWMifeAt/zYI5lAcYguYSQHoiAzu0RFCbnkcllbM9RfQBgapuZPuNvqp3JMremGuJGHqHGJvg2g2YEKThIeEjEwigUp1HM3YQrRffs0JFFAAiEPj6z6K+xbuNaGsgVEGpohE8cHhE8ElAksMocXEll8FMqNTkzd+vV2aEjF/7xhbWuF1/WQnyq4pta3fp1CPw4Ar3wR/tzO9455ylJrqu+91x1Yj71rv2vZwKA5a1PWZ5UvVqpPb5yktp12xuWZrL4jx4B/k9/AolT0+iTfsOYAAAAAElFTkSuQmCC';
                    imageUploder
                        .save()
                        .subscribe(function (res) {
                        expect(res).toBeDefined();
                        expect(imageUploder._sourceBase64).toBeNull();
                        expect(imageUploder.source).toBeDefined();
                        expect(imageUploder.source).toBe(res);
                        done();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=image-uploader.component.spec.js.map