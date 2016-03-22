import {Component} from 'angular2/core';
import {SearchBox} from './searchbox/SearchBox'
import {SearchResultComponent} from './result/Result'
import {SearchResult} from '../../models/SearchResult'
@Component({
  selector: 'youtube-search',
  directives: [SearchBox, SearchResultComponent],
  templateUrl:'app/components/youtube/YouTube.html'
})
export class YouTubeSearchComponent {
  results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }
}