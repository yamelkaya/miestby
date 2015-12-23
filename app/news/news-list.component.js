import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewsService} from './news.service';
import {NewsBaseComponent} from './news-base.component';
import {PageHeaderComponent} from '../common/page-header.component';
import {DateMomentPipe} from '../pipes/date-moment.pipe';

@Component({
    templateUrl:  'app/news/news-list.component.html',
    directives: [ROUTER_DIRECTIVES, PageHeaderComponent],
    providers: [NewsService],
    pipes: [DateMomentPipe]
})
export class NewsListComponent extends NewsBaseComponent{
    static get parameters() {
        return [NewsService, new Inject(Router)];
    }

    constructor(newsService,router){
        super(router);

        this._newsService = newsService;
        this._news = [];
        this._setHeader(
            'Новости',
            [
                {
                    title: 'Добавить свежую!',
                    onClick: this.openNewsEdit
                }
            ]);
    }

    ngOnInit(){
        this._newsService.getNews().then((news) => {
            this.news = news;
        });
    }
}