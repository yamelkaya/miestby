import {Component, View, Input} from 'angular2/core';
import {Request} from 'angular2/http';
import {ListService} from "./list.service";
import {Pager} from './pager.component';

@Component({
    template: '<div></div>',
})
export class ListComponent{
    protected _listService;

    @Input()
    currentPage: number;

    @Input()
    itemsPerPage: number;

    @Input()
    source: any;

    @Input()
    visiblePagesMax: number;

    protected itemsTotal: number;

    protected pagesTotal: number;

    protected items: Array<any>;

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
    }

    protected _onPageChange(page){
        this.currentPage = page;

        this._loadItems();
    }

    protected _reloadSource(source){
        this.source = source;
        this._loadItems();
    }
}