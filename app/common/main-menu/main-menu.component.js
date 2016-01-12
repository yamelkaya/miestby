System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var core_1, router_1;
    var MainMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MainMenuComponent = (function () {
                function MainMenuComponent() {
                    this.menuItems = [
                        {
                            title: 'Мы есть!',
                            url: ['Home']
                        },
                        {
                            title: 'Новости',
                            url: ['News']
                        },
                        {
                            title: 'Мультфильмы',
                            url: ['Home']
                        },
                        {
                            title: 'Помощь',
                            url: ['Home']
                        },
                        {
                            title: 'Контакты',
                            url: ['Home']
                        }
                    ];
                }
                MainMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'main-menu',
                        templateUrl: '/app/common/main-menu/main-menu.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainMenuComponent);
                return MainMenuComponent;
            })();
            exports_1("MainMenuComponent", MainMenuComponent);
        }
    }
});
//# sourceMappingURL=main-menu.component.js.map