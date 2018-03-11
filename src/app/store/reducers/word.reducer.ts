import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Word } from '../models/word.model';
import { WordActions, WordActionTypes } from '../actions/word.actions';

export interface State extends EntityState<Word> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Word> = createEntityAdapter<Word>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: WordActions
): State {
  switch (action.type) {
    case WordActionTypes.AddWord: {
      return adapter.addOne(action.payload.word, state);
    }

    case WordActionTypes.UpsertWord: {
      return adapter.upsertOne(action.payload.word, state);
    }

    case WordActionTypes.AddWords: {
      return adapter.addMany(action.payload.words, state);
    }

    case WordActionTypes.UpsertWords: {
      return adapter.upsertMany(action.payload.words, state);
    }

    case WordActionTypes.UpdateWord: {
      return adapter.updateOne(action.payload.word, state);
    }

    case WordActionTypes.UpdateWords: {
      return adapter.updateMany(action.payload.words, state);
    }

    case WordActionTypes.DeleteWord: {
      return adapter.removeOne(action.payload.id, state);
    }

    case WordActionTypes.DeleteWords: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case WordActionTypes.LoadWords: {
      return adapter.addAll(action.payload.words, state);
    }

    case WordActionTypes.ClearWords: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
