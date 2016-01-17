import {Http, BaseRequestOptions, Request} from 'angular2/http';
import {Observable} from 'rx';

export class Page{
    items: Array<any>
    total: number

    constructor(items,total){
        this.items = items;
        this.total = total;
    }
}

export class ListService{
    private _http : Http;

    constructor(http: Http){
        this._http = http;
    }

    loadPage(source,page,count): Observable<Page>{
        if (!source) return;

        if (source instanceof Array){
            return this._loadPageClient(source,page,count);
        }
        else if (source instanceof Request){
            return this._loadPageServer(source,page,count);
        }
        else {
            throw Error(`${source} is unknown source type`);
        }
    }

    _loadPageClient(source: Array<any>, page: number, count: number): Observable<Page>{
        let total = source.length;
        let items = source.slice((page - 1)*count, page*count);
        return Observable.return(new Page(items, total));
    }

    _loadPageServer(source: Request, page: number, count: number): Observable<Page>{
        source.headers.set('total','true');
        source.headers.set('page',page.toString());
        source.headers.set('count',count.toString());

        return this._http.request(source).flatMap(res => {
            if (res.statusText == 'Ok'){
                let data = res.json();
                return Observable.return(new Page(data.items,data.total));
            }
            else {
                return Observable.return(new Page([], 0));
            }
        });
    }
}