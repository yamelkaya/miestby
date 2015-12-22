import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NewsService} from './news.service';

@Component({
    templateUrl:  'app/news/news-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [NewsService]
})
export class NewsListComponent{
    static get parameters() {
        return [[NewsService]];
    }

    constructor(newsService){
        this._newsService = newsService;
        this._news = [];
    }

    ngOnInit(){
        this._newsService.getNews().then((news) => {
            this.news = news;
            this.news.forEach(this._setNewsDetailUrl)
        });
    }

    _setNewsDetailUrl(item){
        item.url = ['NewsDetail',{id: item._id}];
    }
}