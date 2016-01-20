import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewsService} from './../news.service';
import {ListService} from "../../../app/common/list/list.service";
import {RoutingService} from "../../../app/common/routing.service";
import {ListComponent} from '../../common/list/list.component';
import {Pager} from '../../common/list/pager.component';
import {DateMomentPipe} from '../../pipes/date-moment.pipe';
import {MediaItemComponent} from "../../../app/common/media/media-item.component";

@Component({
    selector: 'news-list',
    templateUrl:  'app/news/list/news-list.component.html',
    directives: [ListComponent,Pager,MediaItemComponent],
    pipes: [DateMomentPipe],
    providers: [ListService]
})
export class NewsListComponent extends ListComponent{
    private _newsService: NewsService;
    private _routingService: RoutingService;

    constructor(newsService: NewsService, listService: ListService, routingService: RoutingService){
        super(listService);
        this._newsService = newsService;
        this._routingService = routingService;

        this.itemsPerPage = 6;
    }

    ngOnInit(){
        this._newsService.getNews(null).then((news) => {
            this._reloadSource(news);
        });
    }

    deleteItem(id){
    }

    editItem(id){
        this._routingService.openNewsEdit(id);
    }

    addItem(){
        this._routingService.openNewsEdit(null);
    }

    viewItem(id){
        this._routingService.openNewsDetails(id);
    }
}