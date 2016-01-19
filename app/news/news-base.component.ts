import {RoutingService} from "../common/routing.service";

export class NewsBaseComponent{
    private _header;
    protected _routingService : RoutingService;

    get header(){ return this._header; }
    set header(value) { this._header = value; }

    constructor(routingService){
        this.header = {};
        this._routingService = routingService;
    }

    _setHeader(title,controls){
        this.header = {
            title: title,
            controls: controls
        }
    }
}

