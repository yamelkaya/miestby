import {Injectable} from 'angular2/core';

@Injectable()
export class NewsService {
    constructor (){
        this._news = [{
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
            contentHtml: ''
        }];
    }

    getNews(id) {
        let result = id ? this._news.find(n => n._id == id) : this._news;
        return Promise.resolve(result);
    }
}
