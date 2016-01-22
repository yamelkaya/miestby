import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Request} from 'angular2/http';
import {ListService} from "./list.service";
import {Pager} from './pager.component';

@Component({
    template: '<div></div>',
})
export class ListComponent{
    @Input()
    currentPage: number;

    @Input()
    itemsPerPage: number;

    @Input()
    source: any;

    @Input()
    visiblePagesMax: number;

    @Output()
    itemsLoad: EventEmitter<any>;

    get items(){
        return this._items;
    }

    get itemsTotal(){
        return this._itemsTotal;
    }

    protected _listService;

    protected _itemsTotal: number;

    protected _items: Array<any>;

    constructor(listService: ListService){
        this._listService = listService;
        this._defaults();
    }

    ngOnInit(){
        this._loadItems();
    }

    ngOnChanges(){
        this._loadItems();
    }

    protected _defaults(){
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this._itemsTotal = 0;
        this._items = [];
        this.visiblePagesMax = 5;
        this.itemsLoad = new EventEmitter();
    }

    protected _onPageChange(page){
        this.currentPage = page;

        this._loadItems();
    }

    protected _reloadSource(source){
        this.source = source;
        this._loadItems();
    }

    private _loadItems(){
        this._listService.loadPage(this.source,this.currentPage,this.itemsPerPage).subscribe(page => {
           this._onItemsLoad(page)
        },this);
    }

    private _onItemsLoad(page){
        this._itemsTotal = page.total;
        this._items = page.items;

        this.itemsLoad.emit(page);
    }
}