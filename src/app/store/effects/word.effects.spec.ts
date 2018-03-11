import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { WordEffects } from './word.effects';

describe('WordService', () => {
  let actions$: Observable<any>;
  let effects: WordEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WordEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
