/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'

import {HomeComponent as Home} from './home/home';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/app.html',
    styleUrls: ['app/components/app.css']
})
@RouteConfig([
    { path: '/', redirectTo:['/Home'], name: 'root', useAsDefault:true},
    { path: '/Home', component: Home, name: 'Home'},
])
export class AppComponent {
  
}
bootstrap(AppComponent, 
    [ ROUTER_PROVIDERS,
      HTTP_PROVIDERS,
      provide(LocationStrategy, {useClass: HashLocationStrategy})
   ]
);