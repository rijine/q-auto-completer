import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of'
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  getSearchResults(keyword) {
    const requestUrl = `http://api.wordnik.com:80/v4/words.json/search/${keyword}?caseSensitive=true&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
    return this.httpClient.get(requestUrl, {}).pipe(
      map((res: any[]) => res ),
      catchError( () =>  of([]))
    );
  }

}
