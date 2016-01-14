export declare class NewsBaseComponent {
    private _router;
    private _header;
    header: any;
    constructor(router: any);
    openNewsEdit(id: any): void;
    openNewsDetails(id: any): void;
    _navigate(routeName: any, params: any): void;
    _setHeader(title: any, controls: any): void;
}
