import {ListService} from '../../../../app/common/list/list.service';
import {MockBackend} from 'angular2/http/testing';
import {Injector,provide} from 'angular2/core';
import {Http, Response, BaseResponseOptions, Request, RequestOptions, RequestMethod, BaseRequestOptions} from 'angular2/http';

describe('ListService', () => {
    var http, backend, connection;
    var responseBody = {
        items: [
            {
                _id: 1,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 2,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 3,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 4,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 5,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 6,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 7,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 8,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },
            {
                _id: 9,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 10,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 11,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 12,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 13,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 14,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 15,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 16,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 17,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 18,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 19,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            },{
                _id: 20,
                title: 'Рождественское, часть 1',
                titleMediaType: 0,
                titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                titleDetails: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мультфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                images: ['http://i.imgur.com/pbramIa.jpg'],
                videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                content: `Праздники на носу, несмотря на ноябрь. Самое время задумывать желания.
Все следующие видео этого мултфильма смотрите на канале в плейлисте "Рождественское"
Весь мультфильм обещал быть готовым к 5 января.`,
                contentHtml: '',
                created: new Date('2015-12-20'),
                updated: new Date('2015-12-24')
            }
        ],
        total: 20
    };

    beforeEach(done => {
        var injector = Injector.resolveAndCreate([
            MockBackend,
            provide(Http, {
                useFactory: (backend) => { return new Http(backend, new BaseRequestOptions())},
                deps: [MockBackend]
            })
        ]);
        http = injector.get(Http);
        backend = injector.get(MockBackend);
        backend.connections.subscribe(c => connection = c);

        done();
    });

    it('should load page with http request as a source', (done) => {
        let listService = new ListService(http);

        let result = listService.loadPage(new Request({url: 'data/news'}),1,5);

        result.subscribe(page => {
            expect(page.items.length).toBe(5);
            expect(page.total).toBe(20);
            done();
        });

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: {items: responseBody.items.slice(0,5), total: responseBody.total}
            })));
    });

    it('should load page with array as a source', (done) => {
        let listService = new ListService(http);

        let result = listService.loadPage(responseBody.items,1,5);

        result.subscribe(page => {
            expect(page.items.length).toBe(5);
            expect(page.total).toBe(20);
            expect(page.items[0]._id).toBe(1);
            expect(page.items[4]._id).toBe(5);
            done();
        });
    });
});