import {Component,Inject}     from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {NewsService} from './../news.service';
import {RoutingService} from '../../common/routing.service';
import {NewsBaseComponent} from './../news-base.component';
import {DateMomentPipe} from '../../pipes/date-moment.pipe';
import {PageHeaderComponent} from '../../common/page-header.component';
import {MediaItemComponent, ImageItemComponent, VideoItemComponent} from "../../common/media/media-item.component";
import {MediaContainerComponent} from "../../common/media/media-container.component";

@Component({
    templateUrl:  'app/news/detail/news-detail.component.html',
    pipes: [DateMomentPipe],
    directives: [PageHeaderComponent, MediaItemComponent, MediaContainerComponent, ImageItemComponent, VideoItemComponent]
})
export class NewsDetailComponent extends NewsBaseComponent{
    private _newsService: NewsService;
    private _routeParams: RouteParams;
    private _id;
    private _item;

    get item() {return this._item;}
    set item(value) {this._item = value;}

    constructor(newsService: NewsService,routeParams : RouteParams,routingService : RoutingService){
        super(routingService);

        this._newsService = newsService;
        this._routeParams = routeParams;
        this._id = routeParams.get('id');
        this.item = {};
    }

    ngOnInit(){
        let self = this;
        this._newsService.getNews(this._id).subscribe(i => self._setNewsInfo(i));
    }

    _setNewsInfo(item){
        this.item = item;
        this._setHeader(item.title,[
            {
                title: 'Редактировать',
                onClick: () => {this._routingService.openNewsEdit(this._id)}
            }
        ]);
    }
}