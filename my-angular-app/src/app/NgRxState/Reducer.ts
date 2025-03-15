import { createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './Actions';

export interface AppState {
  items: any[];
  loading: boolean;
  error: any;
}

export const initialState: AppState = { items: [], loading: false, error: null };

const _itemReducer = createReducer(
  initialState,
  on(loadItems, state => ({ ...state, loading: true })),
  on(loadItemsSuccess, (state, { items }) => ({ ...state, loading: false, items })),
  on(loadItemsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

import { Action } from '@ngrx/store';

export function itemReducer(state: typeof initialState | undefined, action: Action) {
  return _itemReducer(state, action);
}