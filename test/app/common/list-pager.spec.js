import {ListPagerComponent} from '../../../app/common/list-pager.component';
import {MockBackend} from 'angular2/http/testing';
import {Injector,provide} from 'angular2/core';
import {Http, Response, BaseResponseOptions, Request, RequestOptions,RequestMethod,BaseRequestOptions} from 'angular2/http';
import {url} from '../../../db';

describe('ListPager', () => {
    let http, backend, connection;
    let responseBody = {
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
            }
        ],
        total: 20
    };

    beforeEach(done => {
        let injector = Injector.resolveAndCreate([
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

    it('has default values', done => {
        let listPager = new ListPagerComponent(http);
        expect(listPager.currentPage).toEqual(1);
        expect(listPager.itemsPerPage).toEqual(10);
        expect(listPager.itemsTotal).toEqual(0);
        expect(listPager.items.length).toEqual(0);

        done();
    });

    it('should load 1st page on ngOnInit', (done) => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.onItemsLoad = (items,total) => {
            expect(items.length).toBe(10);
            expect(total).toBe(20);
            expect(listPager.currentPage).toBe(1);
            expect(listPager.pagesTotal).toBe(2);

            done();
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it('should load 2nd page', (done) => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 2;
        listPager.itemsPerPage = 2;
        listPager.onItemsLoad = (items,total) => {
            expect(items.length).toBe(2);
            expect(total).toBe(20);
            expect(listPager.currentPage).toBe(2);
            expect(listPager.pagesTotal).toBe(10);

            done();
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });
});