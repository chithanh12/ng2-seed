import {Component} from 'angular2/core'
import {Http, Response} from 'angular2/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import 'rxjs/Rx';
@Component({
    selector: 'simple-http',
    templateUrl:'app/components/simpleHttp/SimpleHttp.html',
    styleUrls:['app/components/simpleHttp/simpleHttp.css']
})
export class SimpleHttpComponent{
    data: Object;
    loading: boolean;
    
    constructor(public http: Http){
        
    }   
    
    makeRequest():void{
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
        .map((x: any)=> x)
        .subscribe((res: Response) =>{
           this.data = res.json();
           this.loading = false; 
        });
    }
}