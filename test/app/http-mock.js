//import {MockBackend} from 'angular2/http/testing';
//import {BaseRequestOptions,Http} from 'angular2/http';
//import {Injector,provide} from 'angular2/core';
//
//export class HttpMock {
//    get connection(){return this._connection};
//    set connection(value){this._connection = value};
//
//    get http(){return this._http;}
//    set http(value) {this._http = value;}
//
//    constructor(){
//        let injector = Injector.resolveAndCreate([
//            MockBackend,
//            provide(Http, {
//                useFactory: (backend) => { return new Http(backend)},
//                deps: [MockBackend]
//            })
//        ]);
//        this.http = injector.get(Http);
//        let backend = injector.get(MockBackend);
//        //Assign any newly-created connection to local variable
//        backend.connections.subscribe(c => this.connection = c);
//    }
//}
