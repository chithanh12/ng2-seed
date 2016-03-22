import {Component, ElementRef,EventEmitter, OnInit} from 'angular2/core';
import {YouTubeService} from  '../../../services/YouTubeService';
import {Observable} from 'rxjs/Rx';
import {SearchResult} from '../../../models/SearchResult';

@Component({
  outputs: ['loading', 'results'],
  selector: 'search-box',
  providers:  [YouTubeService],
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBox implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(public youtube: YouTubeService,
              private el: ElementRef) {
                  console.log(el);
                  console.log(youtube);
  }

  ngOnInit(): void {
    //convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
       .filter((text: string) => text.length > 1) // filter out if empty
       .debounceTime(250)                         // only once every 250ms
      .do(() => this.loading.next(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()
      // act on the return of the search3
      .subscribe(
        (results: SearchResult[]) => { // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );
    
  }
}