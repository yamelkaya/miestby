import { Router } from 'angular2/router';
import { NewsService } from './news.service';
import { NewsBaseComponent } from './news-base.component';
export declare class NewsListComponent extends NewsBaseComponent {
    private _newsService;
    news: any;
    constructor(newsService: NewsService, router: Router);
    ngOnInit(): void;
}
