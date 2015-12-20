import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MainMenuComponent} from './common/main-menu/main-menu.component.js';
import {NewsComponent} from './news/news.component.js';
import {HomeComponent} from './home/home.component.js';

@Component({
    selector: 'mst-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,MainMenuComponent]
})
@RouteConfig([
    {path:'/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path:'/news/...', name: 'News', component: NewsComponent}
])
export class AppComponent { }