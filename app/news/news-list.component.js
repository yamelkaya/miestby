import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewsService} from './news.service';
import {PageHeaderComponent} from '../common/page-header.component';
import {DateMomentPipe} from '../pipes/date-moment.pipe';

@Component({
    templateUrl:  'app/news/news-list.component.html',
    directives: [ROUTER_DIRECTIVES, PageHeaderComponent],
    providers: [NewsService],
    pipes: [DateMomentPipe]
})
export class NewsListComponent{
    static get parameters() {
        return [NewsService, new Inject(Router)];
    }

    constructor(newsService,router){
        this._newsService = newsService;
        this._router = router;
        this._news = [];
        this.header = {
            title: 'Новости',
            controls: [{
                title: 'Добавить свежую!',
                onClick: this.openNewsEdit
            }]
        }
    }

    ngOnInit(){
        this._newsService.getNews().then((news) => {
            this.news = news;
        });
    }

    openNewsEdit(id){
        this._navigate('NewsEdit',id ? {id : id} : undefined);
    }

    openNewsDetails(id){
        this._navigate('NewsDetail',id ? {id : id} : undefined);
    }

    _navigate(routeName, params){
        this._router.navigate([routeName,params]);
    }
}