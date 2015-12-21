import {Component} from 'angular2/core';
import {NewsService} from './news.service';

@Component({
    templateUrl:  'app/news/news-list.component.html'
})
export class NewsListComponent{
    constructor(newsService: NewsService){
        this._newsService = newsService;
        this.news = [];
    }

    ngOnInit(){
        this._newsService.getNews().then((news) => {
            this.news = news;
        });
    }
}