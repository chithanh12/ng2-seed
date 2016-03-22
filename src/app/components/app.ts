/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../../../node_modules/rxjs/Rx.d.ts" />
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
import 'rxjs/Rx'

import {HomeComponent as Home} from './home/home';
import {SimpleHttpComponent as SimpleHttp} from './simpleHttp/SimpleHttpComponent'
import {YouTubeService, YouTubeServiceInjectables} from '../services/YouTubeService'
import {YouTubeSearchComponent as YouTube} from './youtube/YouTubeComponent'

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/app.html',
    styleUrls: ['app/components/app.css']
})
@RouteConfig([
    { path: '/', redirectTo:['/Home'], name: 'root', useAsDefault:true},
    { path: '/Home', component: Home, name: 'Home'},
    {path:'/SimpleHttp', component: SimpleHttp, name:'SimpleHttp'},
    {path:'/youTube', component: YouTube, name:'YouTube'}
])
export class AppComponent {
  
}
bootstrap(AppComponent, 
    [ ROUTER_PROVIDERS,
      HTTP_PROVIDERS,
      YouTubeService, 
      YouTubeServiceInjectables,
      provide(LocationStrategy, {useClass: HashLocationStrategy})
   ]
);