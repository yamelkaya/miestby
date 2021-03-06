System.register(["angular2/core", "moment"], function(exports_1) {
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
    var core_1, m;
    var moment, DateMomentPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (m_1) {
                m = m_1;
            }],
        execute: function() {
            moment = m.default || m;
            DateMomentPipe = (function () {
                function DateMomentPipe() {
                }
                DateMomentPipe.prototype.transform = function (value, args) {
                    return moment(value).format(args[0]);
                };
                DateMomentPipe = __decorate([
                    core_1.Pipe({
                        name: "dateMoment"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DateMomentPipe);
                return DateMomentPipe;
            })();
            exports_1("DateMomentPipe", DateMomentPipe);
        }
    }
});
//# sourceMappingURL=date-moment.pipe.js.map