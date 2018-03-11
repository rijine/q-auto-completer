import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of'

import * as wordActions from './../actions/word.actions';
import { SearchService } from '../../services/search.service';
import { Word } from '../models/word.model';

@Injectable()
export class WordEffects {

  constructor(private actions$: Actions, private searchService: SearchService) {}

}
