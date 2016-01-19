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
    var NewsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewsService = (function () {
                function NewsService(router) {
                    this._router = router;
                    this._news = [
                        {
                            _id: 1,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: '',
                            created: new Date('2015-12-20'),
                            updated: new Date('2015-12-24')
                        },
                        {
                            _id: 2,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: ''
                        },
                        {
                            _id: 3,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: ''
                        },
                        {
                            _id: 4,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: ''
                        },
                        {
                            _id: 5,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: ''
                        },
                        {
                            _id: 6,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: ''
                        },
                        {
                            _id: 7,
                            title: 'Рождественское, часть 1',
                            titleMediaType: 0,
                            titleMedia: 'https://www.youtube.com/embed/eGWwHABmdOo',
                            titleDetails: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            images: ['http://i.imgur.com/pbramIa.jpg'],
                            videos: ['https://www.youtube.com/watch?feature=player_embedded&v=eGWwHABmdOo'],
                            content: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 \u043D\u043E\u0441\u0443, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u043E\u044F\u0431\u0440\u044C. \u0421\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u044F.\n\u0412\u0441\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0443\u043B\u0442\u0444\u0438\u043B\u044C\u043C\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0435 \u0432 \u043F\u043B\u0435\u0439\u043B\u0438\u0441\u0442\u0435 \"\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u0441\u043A\u043E\u0435\"\n\u0412\u0435\u0441\u044C \u043C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C \u043E\u0431\u0435\u0449\u0430\u043B \u0431\u044B\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A 5 \u044F\u043D\u0432\u0430\u0440\u044F.",
                            contentHtml: ''
                        }
                    ];
                }
                NewsService.prototype.getNews = function (id) {
                    var result = id ? this._news.find(function (n) { return n._id == id; }) : this._news;
                    return Promise.resolve(result);
                };
                NewsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], NewsService);
                return NewsService;
            })();
            exports_1("NewsService", NewsService);
        }
    }
});
//# sourceMappingURL=news.service.js.map