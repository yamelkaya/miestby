import {Pipe} from "angular2/core";
import moment from 'moment';

@Pipe({
    name : "dateMoment"
})

export class DateMomentPipe{
    transform(value, args){
        return moment(value).format(args[0]);
    }
}
