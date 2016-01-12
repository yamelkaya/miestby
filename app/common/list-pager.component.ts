import {Component, Input} from 'angular2/core';
import {Http, BaseRequestOptions, Request} from 'angular2/http';

@Component({
    selector: 'list-pager',
    templateUrl:  'app/common/list-pager.component.html',
    //inputs: ['itemsTotal','itemsPerPage','source','currentPage','onPageChange','onItemsLoad']
})
export class ListPagerComponent{
    private _http;

    @Input()
    currentPage;

    @Input()
    itemsPerPage;

    @Input()
    source;

    itemsTotal;

    pages;

    pagesTotal;

    items;

    onItemsLoad;
    onPageChange;

    constructor(http: Http){
        this._http = http;
        this._defaults();
    }

    ngOnInit(){
        this._init();
    }

    ngOnChanges(){
        this._loadItems();
    }

    goToNext(){
        if (this._canGoToNext()){
            this.currentPage ++;
            this._onPageChange();
        }
    }

    goToPrev(){
        if (this._canGoToPrev()) {
            this.currentPage --;
            this._onPageChange();
        }
    }

    goToPage(page){
        if (!this._isCurrentPage(page) && this._isPageValid(page)){
            this.currentPage = page;
            this._onPageChange();
        }
    }

    filter(text){

    }

    _defaults(){
        this.currentPage = 1;
        this.pagesTotal = 0;
        this.itemsPerPage = 10;
        this.itemsTotal = 0;
        this.items = [];
    }

    _init(){
        this._loadItems();
    }

    _loadItems(){
        if (!this.source) return;

        if (this.source instanceof Array){
            this._onItemsLoad(this.source,this.source.length);
        }
        else if (this.source instanceof Request){
            this.source.headers.set('total',true);
            this._http.request(this.source).subscribe(res => {
                if (res.statusText == 'Ok'){
                    let data = res.json();
                    this._onItemsLoad(data.items,data.total);
                }
                else {
                    throw Error(res.text());
                }
            });
        }
        else {
            throw Error(`${this.source} is unknown source type`);
        }
    }

    _onItemsLoad(items, total){
        this.itemsTotal = total;
        this.items = items.slice((this.currentPage - 1)*this.itemsPerPage, this.currentPage*this.itemsPerPage);
        this.pagesTotal = Math.ceil(total/this.itemsPerPage);
        this.pages = this._generatePages(1,this.pagesTotal);

        if (this.onItemsLoad){
            this.onItemsLoad(this.items,total);
        }
    }

    _onPageChange(){
        this._loadItems();

        if (this.onPageChange){
            this.onPageChange(this.currentPage);
        }
    }

    _isCurrentPage(page){
        return page == this.currentPage
    }

    _isPageValid(page){
        return Number.isInteger(page) && 1 <= page && page <= this.pagesTotal;
    }

    _canGoToPrev(){
        return this.currentPage > 1;
    }

    _canGoToNext(){
        return this.currentPage < this.pagesTotal;
    }

    _generatePages(start,end){
        var list = [];
        for (var i = start; i <= end; i++) {
            list.push(i);
        }
        return list;
    }
}