import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const UPDATE_RATIO = 'Left-or-right/BG/UPDATE_RATIO';
export const TOGGLE_SYNC_RATIO = 'Left-or-right/BG/TOGGLE_SYNC_RATIO';

export const updateRatio = createAction(UPDATE_RATIO);
export const toggleSyncRatio = createAction(TOGGLE_SYNC_RATIO);

const initialState = fromJS({
  ratio: 0.5,
  sync: false,
});

export default handleActions({
  [UPDATE_RATIO]: (state, { payload }) => state.set('ratio', payload),
  [TOGGLE_SYNC_RATIO]: (state) => state.set('sync', !state.get('sync')),
}, initialState);
