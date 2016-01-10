import {Component} from 'angular2/core';

@Component({
    selector: 'page-header',
    templateUrl:  'app/common/page-header.component.html',
    inputs: ['title','controls']
})
export class PageHeaderComponent{
}