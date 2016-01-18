import {Component, Input} from 'angular2/core';
import {Request} from 'angular2/http';
import {ListService} from "./list.service";
import {Pager} from './pager.component';

@Component({
    providers: [ListService],
    directives: [Pager]
})
export class ListComponent{
    private _listService;

    @Input()
    currentPage;

    @Input()
    itemsPerPage;

    @Input()
    source;

    @Input()
    visiblePagesMax;

    @Input()
    onItemsLoad;

    @Input()
    onPageChange;

    itemsTotal;

    pagesTotal;

    items;

    constructor(listService: ListService){
        this._listService = listService;
        this._defaults();
    }

    ngOnChanges(){
        this._loadItems();
    }

    private _defaults(){
        this.currentPage = 1;
        this.pagesTotal = 0;
        this.itemsPerPage = 10;
        this.itemsTotal = 0;
        this.items = [];
        this.visiblePagesMax = 5;
    }

    private _loadItems(){
        this._listService.loadPage(this.source,this.currentPage,this.itemsPerPage).subscribe(page => {
           this._onItemsLoad(page)
        },this);
    }

    private _onItemsLoad(page){
        this.itemsTotal = page.total;
        this.items = page.items;

        if (this.onItemsLoad){
            this.onItemsLoad(page);
        }
    }
}