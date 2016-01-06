import {Component, Inject} from 'angular2/core';
import {Http, BaseRequestOptions, Request} from 'angular2/http';

@Component({
    selector: 'list-pager',
    templateUrl:  'app/common/list-pager.component.html',
    inputs: ['itemsTotal','itemsPerPage','source','currentPage','onPageChange','onItemsLoad']
})
export class ListPagerComponent{
    static parameters(){
        return [new Inject(Http)];
    }

    constructor(http){
        this._http = http;
        this._defaults();
    }

    ngOnInit(){
        this._init();
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
        if (this.source instanceof Array){
            this._onItemsLoad(source,source.length);
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
        this.pagesTotal = Math.ceil(total/this.itemsPerPage);
        this.items = items.slice((this.currentPage - 1)*this.itemsPerPage, this.currentPage*this.itemsPerPage);

        if (this.onItemsLoad){
            this.onItemsLoad(this.items,total);
        }
    }
}