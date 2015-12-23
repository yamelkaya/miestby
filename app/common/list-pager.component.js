import {Component} from 'angular2/core';

@Component({
    selector: 'list-pager',
    templateUrl:  'app/common/list-pager.component.html',
    inputs: ['onPageChange','itemsTotal','itemsPerPage','items']
})
export class ListPagerComponent{
}