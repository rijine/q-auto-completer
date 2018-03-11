import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Word } from '../models/word.model';

export enum WordActionTypes {
  LoadWords = '[Word] Load Words',
  AddWord = '[Word] Add Word',
  UpsertWord = '[Word] Upsert Word',
  AddWords = '[Word] Add Words',
  UpsertWords = '[Word] Upsert Words',
  UpdateWord = '[Word] Update Word',
  UpdateWords = '[Word] Update Words',
  DeleteWord = '[Word] Delete Word',
  DeleteWords = '[Word] Delete Words',
  ClearWords = '[Word] Clear Words'
}

export class LoadWords implements Action {
  readonly type = WordActionTypes.LoadWords;

  constructor(public payload: { words: Word[] }) {}
}

export class AddWord implements Action {
  readonly type = WordActionTypes.AddWord;

  constructor(public payload: { word: Word }) {}
}

export class UpsertWord implements Action {
  readonly type = WordActionTypes.UpsertWord;

  constructor(public payload: { word: Update<Word> }) {}
}

export class AddWords implements Action {
  readonly type = WordActionTypes.AddWords;

  constructor(public payload: { words: Word[] }) {}
}

export class UpsertWords implements Action {
  readonly type = WordActionTypes.UpsertWords;

  constructor(public payload: { words: Update<Word>[] }) {}
}

export class UpdateWord implements Action {
  readonly type = WordActionTypes.UpdateWord;

  constructor(public payload: { word: Update<Word> }) {}
}

export class UpdateWords implements Action {
  readonly type = WordActionTypes.UpdateWords;

  constructor(public payload: { words: Update<Word>[] }) {}
}

export class DeleteWord implements Action {
  readonly type = WordActionTypes.DeleteWord;

  constructor(public payload: { id: string }) {}
}

export class DeleteWords implements Action {
  readonly type = WordActionTypes.DeleteWords;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearWords implements Action {
  readonly type = WordActionTypes.ClearWords;
}

export type WordActions =
 LoadWords
 | AddWord
 | UpsertWord
 | AddWords
 | UpsertWords
 | UpdateWord
 | UpdateWords
 | DeleteWord
 | DeleteWords
 | ClearWords;
