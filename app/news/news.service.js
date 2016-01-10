System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NewsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let NewsService = class {
                constructor() {
                    this._news = [
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
                            contentHtml: ''
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
                            contentHtml: ''
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
                            contentHtml: ''
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
                            contentHtml: ''
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
                            contentHtml: ''
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
                            contentHtml: ''
                        }
                    ];
                }
                getNews(id) {
                    let result = id ? this._news.find(n => n._id == id) : this._news;
                    return Promise.resolve(result);
                }
            };
            NewsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], NewsService);
            NewsService = NewsService;
        }
    }
});
//# sourceMappingURL=news.service.js.map