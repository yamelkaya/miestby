import {Component,Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewsService} from './../news.service';
import {ListComponent} from '../../common/list/list.component';
import {Pager} from '../../common/list/pager.component';
import {DateMomentPipe} from '../../pipes/date-moment.pipe';
import {ListService} from "../../../app/common/list/list.service";

@Component({
    selector: 'news-list',
    templateUrl:  'app/news/list/news-list.component.html',
    directives: [ListComponent,Pager],
    pipes: [DateMomentPipe],
    providers: [ListService]
})
export class NewsListComponent extends ListComponent{
    private _newsService;

    constructor(newsService: NewsService, listService: ListService){
        super(listService);

        this._newsService = newsService;
        this.itemsPerPage = 6;
    }

    ngOnInit(){
        this._newsService.getNews().then((news) => {
            this._reloadSource(news);
        });
    }
}