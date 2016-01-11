import {Component,Inject}     from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {NewsService} from './news.service';
import {NewsBaseComponent} from './news-base.component';
//import {DateMomentPipe} from '../pipes/date-moment.pipe';
import {PageHeaderComponent} from '../common/page-header.component';

@Component({
    templateUrl:  'app/news/news-detail.component.html',
    providers: [NewsService,RouteParams,Router],
    //pipes: [DateMomentPipe],
    directives: [PageHeaderComponent]
})
export class NewsDetailComponent extends NewsBaseComponent{
    private _newsService;
    private _routeParams;
    private _id;
    private _item;

    get item() {return this._item;}
    set item(value) {this._item = value;}

    constructor(newsService,routeParams,router){
        super(router);

        this._newsService = newsService;
        this._routeParams = routeParams;
        this._id = routeParams.get('id');
        this.item = {};
    }

    ngOnInit(){
        let self = this;
        this._newsService.getNews(this._id).then(i => self._setNewsInfo(i));
    }

    _setNewsInfo(item){
        this.item = item;
        this._setHeader(item.title,[
            {
                title: 'Редактрировать',
                onClick: () => {this.openNewsEdit(this._id)}
            }
        ]);
    }
}