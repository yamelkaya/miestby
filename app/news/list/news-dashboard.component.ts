import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewsService} from './../news.service';
import {NewsBaseComponent} from './../news-base.component';
import {PageHeaderComponent} from '../../common/page-header.component';
import {NewsListComponent} from './news-list.component';
import {RoutingService} from "../../common/routing.service";

@Component({
    templateUrl:  'app/news/list/news-dashboard.component.html',
    directives: [ROUTER_DIRECTIVES, PageHeaderComponent, NewsListComponent]
})
export class NewsDashboardComponent extends NewsBaseComponent{
    private _newsService;

    news;

    constructor(newsService : NewsService, routingService : RoutingService){
        super(routingService);

        this._newsService = newsService;
        this._setHeader(
            'Новости',
            [
                {
                    title: 'Добавить свежую!',
                    onClick: this._routingService.openNewsEdit
                }
            ]);
    }
}