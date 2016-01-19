import {Pager} from '../../../../app/common/list/pager.component';

describe('Pager', () => {
    var page = {
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

    describe('20 items total, 2 items per page, odd visible pages greater then 1 (5 - default)', () => {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
        });

        it('should update visible pages and pages total when ngOnChanges called - 1st page', done => {
            listPager.currentPage = 1;
            listPager.ngOnChanges();

            expect(listPager.pagesTotal).toBe(10);
            expect(listPager.visiblePages.length).toBe(5);
            expect(listPager.visiblePages[0]).toBe(1);
            expect(listPager.visiblePages[4]).toBe(5);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 4rd page', done => {
            listPager.currentPage = 4;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(5);
            expect(listPager.visiblePages[0]).toBe(2);
            expect(listPager.visiblePages[4]).toBe(6);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 9th page', done => {
            listPager.currentPage = 9;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(5);
            expect(listPager.visiblePages[0]).toBe(6);
            expect(listPager.visiblePages[4]).toBe(10);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });
    });

    describe('20 items total, 2 items per page, even visible pages greater then 1 (4)', () => {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
            listPager.visiblePagesMax = 4;
        });

        it('should update visible pages and pages total when ngOnChanges called - 1st page', done => {
            listPager.currentPage = 1;
            listPager.ngOnChanges();

            expect(listPager.pagesTotal).toBe(10);
            expect(listPager.visiblePages.length).toBe(4);
            expect(listPager.visiblePages[0]).toBe(1);
            expect(listPager.visiblePages[3]).toBe(4);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 4rd page', done => {
            listPager.currentPage = 4;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(4);
            expect(listPager.visiblePages[0]).toBe(3);
            expect(listPager.visiblePages[3]).toBe(6);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 9th page', done => {
            listPager.currentPage = 9;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(4);
            expect(listPager.visiblePages[0]).toBe(7);
            expect(listPager.visiblePages[3]).toBe(10);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });
    });

    describe('20 items total, 2 items per page, even visible pages greater then 1 (2)', () => {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
            listPager.visiblePagesMax = 2;
        });

        it('should update visible pages and pages total when ngOnChanges called - 1st page', done => {
            listPager.currentPage = 1;
            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(2);
            expect(listPager.visiblePages[0]).toBe(1);
            expect(listPager.visiblePages[1]).toBe(2);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 4rd page', done => {
            listPager.currentPage = 4;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(2);
            expect(listPager.visiblePages[0]).toBe(4);
            expect(listPager.visiblePages[1]).toBe(5);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 9th page', done => {
            listPager.currentPage = 9;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(2);
            expect(listPager.visiblePages[0]).toBe(9);
            expect(listPager.visiblePages[1]).toBe(10);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });
    });

    describe('20 items total, 2 items per page, single visible page', () => {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
            listPager.visiblePagesMax = 1;
        });

        it('should update visible pages and pages total when ngOnChanges called - 1st page', done => {
            listPager.currentPage = 1;
            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(1);
            expect(listPager.visiblePages[0]).toBe(1);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 4rd page', done => {
            listPager.currentPage = 4;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(1);
            expect(listPager.visiblePages[0]).toBe(4);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });

        it('should update visible pages and pages total when ngOnChanges called - 9th page', done => {
            listPager.currentPage = 9;

            listPager.ngOnChanges();

            expect(listPager.visiblePages.length).toBe(1);
            expect(listPager.visiblePages[0]).toBe(9);
            expect(listPager.pagesTotal).toBe(10);

            done();
        });
    });

    describe('go next', ()=> {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
        });

        it('should increase current page if have more pages', done => {
            listPager.currentPage = 5;
            listPager.onPageChange.subscribe(page => {
                expect(page).toEqual(6);
                done();
            });
            listPager.ngOnChanges();

            listPager.goToNext();
        });

        it('should not increase current page if no more pages', done => {
            listPager.currentPage = 10;
            listPager.onPageChange.subscribe(page => {
                expect(true).toEqual(false);
                done();
            });
            listPager.ngOnChanges();

            listPager.goToNext();

            expect(listPager.currentPage).toBe(10);
            done();
        });
    });

    describe('go prev', ()=> {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
        });

        it('should decrease current page if have more pages', done => {
            listPager.currentPage = 5;
            listPager.onPageChange.subscribe(page => {
                expect(page).toEqual(4);
                done();
            });
            listPager.ngOnChanges();

            listPager.goToPrev();
        });

        it('should not decrease current page if no more pages', done => {
            listPager.currentPage = 1;
            listPager.onPageChange.subscribe(page => {
                expect(true).toEqual(false);
                done();
            });
            listPager.ngOnChanges();

            listPager.goToPrev();

            expect(listPager.currentPage).toBe(1);
            done();
        });
    });

    describe('go to page', ()=> {
        let listPager = new Pager();

        beforeEach(() => {
            listPager.items = page.items.slice(0,2);
            listPager.itemsTotal = page.total;
            listPager.itemsPerPage = 2;
            listPager.currentPage = 1;

            listPager.ngOnChanges();
        });

        it('should set current page if page is valid', done => {
            listPager.onPageChange.subscribe(page => {
                expect(page).toEqual(7);
                done();
            });

            listPager.goToPage(7);
        });

        it('should not set current page is greater then right bound', done => {
            listPager.onPageChange.subscribe(page => {
                expect(true).toEqual(false);
                done();
            });

            listPager.goToPage(11);

            expect(listPager.currentPage).toBe(1);
            done();
        });

        it('should not set current page is less then left bound', done => {
            listPager.onPageChange.subscribe(page => {
                expect(true).toEqual(false);
                done();
            });

            listPager.goToPage(0);

            expect(listPager.currentPage).toBe(1);
            done();
        });

        it('should not set current page is not a number', done => {
            listPager.onPageChange.subscribe(page => {
                expect(true).toEqual(false);
                done();
            });

            listPager.goToPage('a');

            expect(listPager.currentPage).toBe(1);
            done();
        });
    });
});