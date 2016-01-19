import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {NewsService} from './news.service';
import {NewsDetailComponent} from './detail/news-detail.component';
import {NewsDashboardComponent} from './list/news-dashboard.component';
import {RoutingService} from '../common/routing.service';

@Component({
    template:  `<router-outlet></router-outlet>`,
    providers: [NewsService,RoutingService],
    directives: [RouterOutlet]
})
@RouteConfig([
    {path:'/',  name: 'NewsList', component: NewsDashboardComponent, useAsDefault: true},
    {path:'/detail/:id',      name: 'NewsDetail', component: NewsDetailComponent},
    {path:'/edit/:id',      name: 'NewsEdit', component: NewsDetailComponent}
])
export class NewsComponent {
}//