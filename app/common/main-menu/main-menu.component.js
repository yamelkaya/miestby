import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'main-menu',
    templateUrl: '/app/common/main-menu/main-menu.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class MainMenuComponent{
    constructor() {
        this.menuItems = [
            {
                title: 'Мы есть!',
                url: ['Home']
            },
            {
                title: 'Новости',
                url: ['News']
            },
            {
                title: 'Мультфильмы',
                url: ['Home']
            },
            {
                title: 'Помощь',
                url: ['Home']
            },
            {
                title: 'Контакты',
                url: ['Home']
            }
        ]
    }
}
