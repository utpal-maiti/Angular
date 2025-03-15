import { createSelector,  } from '@ngrx/store';
import { AppState } from './Reducer';

export const selectItemsState = (state : AppState) => state;

export const selectAllItems = createSelector(
  selectItemsState,
  itemsState => itemsState.items
);