var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(["angular2/core", 'moment'], function(exports_1) {
    var core_1, moment;
    var DateMomentPipe;
    return {
        setters:[
            function (_core_1) {
                core_1 = _core_1;
            },
            function (_moment) {
                moment = _moment;
            }],
        execute: function() {
            DateMomentPipe = (function () {
                function DateMomentPipe() {
                }
                DateMomentPipe.prototype.transform = function (value, args) {
                    return moment(value).format(args[0]);
                };
                DateMomentPipe = __decorate([
                    core_1.Pipe({
                        name: "dateMoment"
                    })
                ], DateMomentPipe);
                return DateMomentPipe;
            })();
            exports_1("DateMomentPipe", DateMomentPipe);
        }
    }
});
