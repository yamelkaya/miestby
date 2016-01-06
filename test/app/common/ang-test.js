//import 'zone.js';
//import 'reflect-metadata';
//import 'babel-polyfill';
//import {
//    AsyncTestCompleter,
//    afterEach,
//    beforeEach,
//    ddescribe,
//    describe,
//    expect,
//    iit,
//    inject,
//    it,
//    xit
//} from 'angular2/testing_internal';
//import {Injector, provide} from 'angular2/core';
//import {MockBackend, MockConnection} from 'angular2/src/http/backends/mock_backend';
//import {
//    BaseRequestOptions,
//    ConnectionBackend,
//    Request,
//    RequestMethod,
//    RequestOptions,
//    Response,
//    ResponseOptions,
//    URLSearchParams,
//    JSONP_PROVIDERS,
//    HTTP_PROVIDERS,
//    XHRBackend,
//    JSONPBackend,
//    Http,
//    Jsonp
//} from 'angular2/http';
//
//describe('http', () => {
//    var url = 'http://foo.bar';
//    var http;
//    var injector;
//    var backend;
//    var baseResponse;
//    var jsonp;
//    injector = Injector.resolveAndCreate([
//        MockBackend,
//        provide(
//            Http,
//            {
//                useFactory: function (backend, baseRequestOptions) {
//                    return new Http(backend, new BaseRequestOptions());
//                },
//                deps: [MockBackend]
//            })
//    ]);
//    http = injector.get(Http);
//    backend = injector.get(MockBackend);
//    baseResponse = new Response(new ResponseOptions({body: 'base response'}));
//
//    it('should get some data', (done) => {
//        var connection;
//        backend.connections.subscribe(c => connection = c);
//        http.request('data.json').subscribe((res) => {
//            expect(res.text()).toBe('awesome');
//            done();
//        });
//        connection.mockRespond(new Response('awesome'));
//    });
//});
