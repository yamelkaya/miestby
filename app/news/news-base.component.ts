export class NewsBaseComponent{
    private _router;
    private _header;

    get header(){ return this._header; }
    set header(value) { this._header = value; }

    constructor(router){
        this._router = router;
        this.header = {};
    }

    openNewsEdit(id){
        this._navigate('NewsEdit',id ? {id : id} : undefined);
    }

    openNewsDetails(id){
        this._navigate('NewsDetail',id ? {id : id} : undefined);
    }

    _navigate(routeName, params){
        this._router.navigate([routeName,params]);
    }

    _setHeader(title,controls){
        this.header = {
            title: title,
            controls: controls
        }
    }
}
