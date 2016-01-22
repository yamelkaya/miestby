import {bootstrap}    from 'angular2/platform/browser';
import {provide}    from 'angular2/core';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';

bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy})]);