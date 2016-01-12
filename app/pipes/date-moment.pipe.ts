import {Pipe} from "angular2/core";
import m = require("moment")
var moment : moment.MomentStatic;
moment = (m as any).default || m;

@Pipe({
    name : "dateMoment"
})
export class DateMomentPipe{
    transform(value, args){
        return moment(value).format(args[0]);
    }
}
