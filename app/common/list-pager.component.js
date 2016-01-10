System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ListPagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let ListPagerComponent = class {
                constructor(http) {
                    this._http = http;
                    this._defaults();
                }
                ngOnInit() {
                    this._init();
                }
                goToNext() {
                    if (this.currentPage < this.pagesTotal) {
                        this.currentPage++;
                        this._onPageChange();
                    }
                }
                goToPrev() {
                    if (this.currentPage > 1) {
                        this.currentPage--;
                        this._onPageChange();
                    }
                }
                goToPage(page) {
                    if (!this._isCurrentPage(page) && this._isPageValid(page)) {
                        this.currentPage = page;
                        this._onPageChange();
                    }
                }
                filter(text) {
                }
                _defaults() {
                    this.currentPage = 1;
                    this.pagesTotal = 0;
                    this.itemsPerPage = 10;
                    this.itemsTotal = 0;
                    this.items = [];
                }
                _init() {
                    this._loadItems();
                }
                _loadItems() {
                    if (!this.source)
                        return;
                    if (this.source instanceof Array) {
                        this._onItemsLoad(this.source, this.source.length);
                    }
                    else if (this.source instanceof http_1.Request) {
                        this.source.headers.set('total', true);
                        this._http.request(this.source).subscribe(res => {
                            if (res.statusText == 'Ok') {
                                let data = res.json();
                                this._onItemsLoad(data.items, data.total);
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
                _onItemsLoad(items, total) {
                    this.itemsTotal = total;
                    this.items = items.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
                    this.pagesTotal = Math.ceil(total / this.itemsPerPage);
                    this.pages = this._generatePages(1, this.pagesTotal);
                    if (this.onItemsLoad) {
                        this.onItemsLoad(this.items, total);
                    }
                }
                _onPageChange() {
                    this._loadItems();
                    if (this.onPageChange) {
                        this.onPageChange(this.currentPage);
                    }
                }
                _isCurrentPage(page) {
                    return page == this.currentPage;
                }
                _isPageValid(page) {
                    return Number.isInteger(page) && 1 <= page && page <= this.pagesTotal;
                }
                _generatePages(start, end) {
                    var list = [];
                    for (var i = start; i <= end; i++) {
                        list.push(i);
                    }
                    return list;
                }
            };
            ListPagerComponent = __decorate([
                core_1.Component({
                    selector: 'list-pager',
                    templateUrl: 'app/common/list-pager.component.html',
                }), 
                __metadata('design:paramtypes', [Object])
            ], ListPagerComponent);
            ListPagerComponent = ListPagerComponent;
        }
    }
});
//# sourceMappingURL=list-pager.component.js.map