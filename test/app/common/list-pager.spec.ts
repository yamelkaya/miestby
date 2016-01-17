import {ListPagerComponent} from '../../../app/common/list/list-pager.component';
import {MockBackend} from 'angular2/http/testing';
import {Injector,provide} from 'angular2/core';
import {Http, Response, BaseResponseOptions, Request, RequestOptions,RequestMethod,BaseRequestOptions} from 'angular2/http';

describe('ListPager', () => {
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

    it('has default values', done => {
        let listPager = new ListPagerComponent(http);
        expect(listPager.currentPage).toEqual(1);
        expect(listPager.itemsPerPage).toEqual(10);
        expect(listPager.itemsTotal).toEqual(0);
        expect(listPager.items.length).toEqual(0);
        expect(listPager.visiblePagesMax).toEqual(5);

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
            expect(listPager.visiblePages.length).toBe(2);

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

    it('should load last page', (done) => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 10;
        listPager.itemsPerPage = 2;
        listPager.onItemsLoad = (items,total) => {
            expect(items.length).toBe(2);
            expect(items[0]._id).toBe(19);
            expect(total).toBe(20);
            expect(listPager.currentPage).toBe(10);
            expect(listPager.pagesTotal).toBe(10);

            done();
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it('should limit visible pages to maxVisiblePages if more', (done) => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 1;
        listPager.itemsPerPage = 2;
        listPager.visiblePagesMax = 5;
        listPager.onItemsLoad = (items,total) => {
            expect(listPager.pagesTotal).toBe(10);
            expect(listPager.visiblePages.length).toEqual(listPager.visiblePagesMax);
            expect(listPager.visiblePages[0]).toEqual(1);
            expect(listPager.visiblePages[listPager.visiblePagesMax - 1]).toEqual(listPager.visiblePagesMax);

            done();
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it('should limit visible pages to maxVisiblePages and start with previous when go to page', (done) => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 4;
        listPager.itemsPerPage = 2;
        listPager.visiblePagesMax = 5;
        listPager.onItemsLoad = (items,total) => {
            expect(listPager.pagesTotal).toBe(10);
            expect(listPager.visiblePages.length).toEqual(listPager.visiblePagesMax);
            expect(listPager.visiblePages[0]).toEqual(2);
            expect(listPager.visiblePages[listPager.visiblePagesMax - 1]).toEqual(6);

            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it('should limit visible pages to maxVisiblePages for last page', (done) => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 10;
        listPager.itemsPerPage = 2;
        listPager.visiblePagesMax = 5;
        listPager.onItemsLoad = (items,total) => {
            expect(listPager.pagesTotal).toBe(10);
            expect(listPager.visiblePages.length).toEqual(listPager.visiblePagesMax);
            expect(listPager.visiblePages[0]).toEqual(6);
            expect(listPager.visiblePages[listPager.visiblePagesMax - 1]).toEqual(10);

            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it('should switch to the prev page if current page > 1', done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 2;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = () => {
            listPager.onPageChange = (newPage) => {
                expect(newPage).toBe(1);
                done();
            };

            listPager.goToPrev();
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it('should switch to the next page if current page < last', done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 1;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = (items,total) => {
            listPager.onPageChange = (newPage) => {
                expect(newPage).toBe(2);
                done();
            };

            listPager.goToNext();
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it(`shouldn't switch to prev page if current page == 1`, done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 1;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = () => {
            listPager.onPageChange = (newPage) => {
                //this code must not be called
                expect(false).toBeTruthy()
            };

            listPager.goToPrev();
            expect(listPager.currentPage).toBe(1);
            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it(`shouldn't switch to next page if current page == last`, done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 10;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = () => {
            listPager.onPageChange = (newPage) => {
                //this code must not be called
                expect(false).toBeTruthy()
            };

            listPager.goToNext();
            expect(listPager.currentPage).toBe(10);
            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it(`should go to the page if number is valid`, done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 3;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = (items,total) => {
            listPager.onPageChange = (newPage) => {
                expect(newPage).toBe(4);
                done();
            };

            listPager.goToPage(4);
        };

        listPager.ngOnInit();

        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it(`shouldn't go to the page if number is greater then last index`, done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 5;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = () => {
            listPager.onPageChange = (newPage) => {
                //this code must not be called
                expect(false).toBeTruthy()
            };

            listPager.goToPage(20);
            expect(listPager.currentPage).toBe(5);
            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it(`shouldn't go to the page if number is less then 1`, done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 5;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = () => {
            listPager.onPageChange = (newPage) => {
                //this code must not be called
                expect(false).toBeTruthy()
            };

            listPager.goToPage(0);
            expect(listPager.currentPage).toBe(5);
            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });

    it(`shouldn't go to the page if number is not integer`, done => {
        let listPager = new ListPagerComponent(http);
        listPager.source = new Request({url: 'data/news'});
        listPager.currentPage = 5;
        listPager.itemsPerPage = 2;

        listPager.onItemsLoad = () => {
            listPager.onPageChange = (newPage) => {
                //this code must not be called
                expect(false).toBeTruthy()
            };

            listPager.goToPage('text');
            expect(listPager.currentPage).toBe(5);
            done();
        };

        listPager.ngOnInit();
        connection.mockRespond(new Response(
            new BaseResponseOptions().merge({
                body: responseBody
            })));
    });
});