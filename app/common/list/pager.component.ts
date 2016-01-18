import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Request} from 'angular2/http';
import {ListService} from "./list.service";

@Component({
    selector: 'list-pager',
    templateUrl:  'app/common/list/pager.component.html',
})
export class Pager{
    @Input()
    currentPage: number;

    @Input()
    itemsPerPage: number;

    @Input()
    visiblePagesMax: number;

    @Output()
    onPageChange: EventEmitter<any>;

    @Input()
    items: Array<any>;

    @Input()
    itemsTotal: number;

    get visiblePages(){
        return this._visiblePages;
    }

    get pagesTotal(){
        return this._pagesTotal;
    }

    private _visiblePages;

    private _pagesTotal;

    constructor(){
        this._defaults();
    }

    ngOnChanges(){
        this._init();
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

    _defaults(){
        this.visiblePagesMax = 5;
        this.items = [];
        this.itemsTotal = 0;
        this.itemsPerPage = 0;
        this.currentPage = 1;
        this.onPageChange = new EventEmitter();
    }

    _init(){
        if (this.itemsPerPage != 0 && this.itemsTotal != 0)
        {
            this._pagesTotal = Math.ceil(this.itemsTotal/this.itemsPerPage);
            this._updateVisiblePages();
        }
    }

    _onPageChange(){
        this.onPageChange.emit(this.currentPage);
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

    _updateVisiblePages() {
        var surroundPages = Math.floor((this.visiblePagesMax - 1) / 2);
        var even = this.visiblePagesMax % 2 == 0;
        this._visiblePages = this._generatePages(this.currentPage - surroundPages, this.currentPage + surroundPages + (even? 1 : 0));
    }

    _generatePages(start, end){
        var list = [],
            actualStart = start,
            actualEnd = end;

        var overflowLeft = 1 - start;
        if (overflowLeft > 0){
            actualStart = 1;
            actualEnd = Math.min(actualEnd + overflowLeft, this.pagesTotal);
        }
        else {
            var overflowRight = end - this.pagesTotal;
            if (overflowRight > 0){
                actualEnd = this.pagesTotal;
                actualStart = Math.max(1, actualStart - overflowRight);
            }
        }

        for (var i = actualStart; i <= actualEnd; i++) {
            list.push(i);
        }

        return list;
    }
}