import {ImageService} from '../../../../app/common/media/image.service';
import {MockBackend} from 'angular2/http/testing';
import {Injector,provide} from 'angular2/core';
import {Http, Response, BaseResponseOptions, Request, RequestOptions, RequestMethod, BaseRequestOptions} from 'angular2/http';

describe('ImageUploader', () => {
    let backend,
        http : Http,
        imageService : ImageService;

    beforeEach(done => {
        var injector = Injector.resolveAndCreate([
            MockBackend,
            provide(Http, {
                useFactory: (backend) => { return new Http(backend, new BaseRequestOptions())},
                deps: [MockBackend]
            }),
            ImageService
        ]);

        http = injector.get(Http);
        backend = injector.get(MockBackend);
        imageService = injector.get(ImageService);

        done();
    });

    it('should return image link on upload', done => {
        let link = 'http://link.png';

        backend.connections.subscribe(connection => {
            connection.mockRespond(new Response(
                new BaseResponseOptions().merge({
                    body: {link: link}
                })));
        });

        imageService
            .upload('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMoSURBVDjLndPLb5RVHMbx5515pxfnnaadQi9MSykzRSFSqyWjITVoUIMhLmClLky6YcempKBGgitDJEgaIlVjMGkkLkCqIUTjyo7YQs00dYYZpsNoufReaWn7nvM757yX4wJJJBoXfv+AT57NY2it8bBT2fct6aoeodQeoSgplISQYpSE+i6onv2gWr9e/tEbMY6/ZTwETmaO7ZKO+uKZ6q7WoFkBx/BQV7keN6fyuJj7qj9mfJJVjturlNf9+YH40CPAiV+P7tsYSlysDW/AtLqHcTuPoA5gp/U0zl39bKnS3ZeMGC+NJhNWNHdrFbdn7f3nD7cPAkDgw/GjUaHEQJ21EWN2Ean7I7jvrCBR2YL5ubtgjN4L692HttRVROtrKtDWaIFIDbzy9nAUAAJcUk9n9S6rRFPI8wlwV2B9MApLhPBN5sJ4LHj6miDnQKI5jMKMQLSqHG1NEUtw6vkLYHuDoXJk7QKUK1EVsNBe9QRGiz+D1sRBR5p9HZsjQeX4mLqnUJyTaKgNQ5DYCwAmJ7FNGi4CMNBhPYlN5THc+b2EdCl9tjUysIFIdsZqKzFS5ODMA1v1sDUWghTUCgAmI071FevKuiI7MD9zF/1jJ5ckU33Hll87M7GSNn8IP15aWBbbTRjgzIf2fUhlQpEIPljAafKXG8Mdl64PLkqSxw/PNp3fvRR+S/PcxPM8/cKlbb0Q0gPnGsQ81NaEML1gQ0kqPQAYfflt5uv+U1Ntl7esBHs0p7yzudkyir/BX7NBRODCA3ENYbtojj+G4aslOJIuA4A5WOo4qzkd15xOO/GWMifeAt/zYI5lAcYguYSQHoiAzu0RFCbnkcllbM9RfQBgapuZPuNvqp3JMremGuJGHqHGJvg2g2YEKThIeEjEwigUp1HM3YQrRffs0JFFAAiEPj6z6K+xbuNaGsgVEGpohE8cHhE8ElAksMocXEll8FMqNTkzd+vV2aEjF/7xhbWuF1/WQnyq4pta3fp1CPw4Ar3wR/tzO9455ylJrqu+91x1Yj71rv2vZwKA5a1PWZ5UvVqpPb5yktp12xuWZrL4jx4B/k9/AolT0+iTfsOYAAAAAElFTkSuQmCC')
            .subscribe(res => {
                expect(res.link).toBe(link);

                done();
            });
    });


    it('should delete image', done => {
        backend.connections.subscribe(connection => {
            connection.mockRespond(new Response(
                new BaseResponseOptions().merge({
                    body: {}
                })));
        });

        imageService
            .delete()
            .subscribe(res => {
                expect(res.link).toBe(link);

                done();
            });
    });
});
