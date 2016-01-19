import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router'

@Injectable()
export class RoutingService {
    private _router: Router;

    constructor (router: Router){
        this._router = router;
    }

    openNewsEdit(id){
        this._navigate('NewsEdit',id ? {id : id} : undefined);
    }

    openNewsDetails(id){
        this._navigate('NewsDetail',id ? {id : id} : undefined);
    }

    openNewsDelete(id){

    }

    private _navigate(routeName, params){
        this._router.navigate([routeName,params]);
    }
}
