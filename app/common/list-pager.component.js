import {Component, Inject} from 'angular2/core';
import {Http, Request} from 'angular2/http';

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
        this.itemsPerPage = 0;
        this.itemsTotal = 0;
        this.items = [];
    }

    _init(){
        this._loadItems(this.source,this.currentPage,this.itemsPerPage);
    }

    _loadItems(source,currentPage,itemsPerPage){
        if (source instanceof Array){
            this._setItems(source,source.length,itemsPerPage,currentPage);
        }
        else if (source instanceof Request){
            source.headers.set('total',true);
            this._http.request(source).subscribe(res => {
                if (res.ok){
                    let data = res.json();
                    this._setItems(data.items,data.total,itemsPerPage,currentPage);
                }
            });
        }
        else {
            throw Error(`${source} is unknown source type`);
        }
    }

    _setItems(items,total,itemsPerPage,currentPage){
        this.itemsTotal = total;
        this.pagesTotal = Math.ceil(total/itemsPerPage);
        this.items = items.slice((currentPage - 1)*itemsPerPage,currentPage*itemsPerPage);
    }
}