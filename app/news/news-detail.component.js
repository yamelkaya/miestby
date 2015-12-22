import {Component,Inject}     from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {NewsService} from './news.service';

@Component({
    templateUrl:  'app/news/news-detail.component.html',
    providers: [NewsService]
})
export class NewsDetailComponent {
    static get parameters(){
        return [NewsService,new Inject(RouteParams)];
    }

    constructor(newsService,routeParams){
        this._newsService = newsService;
        this._routeParams = routeParams;
        this._id = routeParams.get('id');
        this.item = {};
    }

    ngOnInit(){
        let self = this;
        this._newsService.getNews(this._id).then(i => self.item = i);
    }
}//