System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PageHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PageHeaderComponent = (function () {
                function PageHeaderComponent() {
                }
                PageHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'page-header',
                        templateUrl: 'app/common/page-header.component.html',
                        inputs: ['title', 'controls']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PageHeaderComponent);
                return PageHeaderComponent;
            })();
            exports_1("PageHeaderComponent", PageHeaderComponent);
        }
    }
});
//# sourceMappingURL=page-header.component.js.map