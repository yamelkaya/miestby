import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {NewsService} from './news.service';
import {NewsDetailComponent} from './news-detail.component.js';
import {NewsListComponent} from './news-list.component';

@Component({
    template:  `<router-outlet></router-outlet>`,
    //viewProviders: [NewsService],
    directives: [RouterOutlet]
})
@RouteConfig([
    {path:'/',  name: 'NewsList', component: NewsListComponent, useAsDefault: true},
    {path:'/detail/:id',      name: 'NewsDetail', component: NewsDetailComponent},
    {path:'/edit/:id',      name: 'NewsEdit', component: NewsDetailComponent}
])
export class NewsComponent {
}//