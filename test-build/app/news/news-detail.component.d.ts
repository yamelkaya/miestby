import { RouteParams, Router } from 'angular2/router';
import { NewsService } from './news.service';
import { NewsBaseComponent } from './news-base.component';
export declare class NewsDetailComponent extends NewsBaseComponent {
    private _newsService;
    private _routeParams;
    private _id;
    private _item;
    item: any;
    constructor(newsService: NewsService, routeParams: RouteParams, router: Router);
    ngOnInit(): void;
    _setNewsInfo(item: any): void;
}
