import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewsService} from './../news.service';
import {NewsBaseComponent} from './../news-base.component';
import {PageHeaderComponent} from '../../common/page-header.component';
import {ListPagerComponent} from '../../common/list/list-pager.component';
import {DateMomentPipe} from '../../pipes/date-moment.pipe';

@Component({
    templateUrl:  'app/news/list/news-list.component.html',
    directives: [ROUTER_DIRECTIVES, PageHeaderComponent, ListPagerComponent],
    pipes: [DateMomentPipe]
})
export class NewsListComponent extends NewsBaseComponent{
    private _newsService;

    news;

    constructor(newsService : NewsService, router : Router){
        super(router);

        this._newsService = newsService;
        this.news = [];
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