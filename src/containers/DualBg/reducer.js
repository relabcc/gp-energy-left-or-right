import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { titles } from '../../text';

export const UPDATE_RATIO = 'Left-or-right/BG/UPDATE_RATIO';
export const TOGGLE_SYNC_RATIO = 'Left-or-right/BG/TOGGLE_SYNC_RATIO';
export const SET_INITED = 'Left-or-right/BG/SET_INITED';

export const updateRatio = createAction(UPDATE_RATIO);
export const toggleSyncRatio = createAction(TOGGLE_SYNC_RATIO);
export const setInited = createAction(SET_INITED);

const initialState = fromJS({
  ratio: 0.5,
  sync: false,
  inited: titles.slice().fill(false),
});

export default handleActions({
  [UPDATE_RATIO]: (state, { payload }) => state.set('ratio', payload),
  [SET_INITED]: (state, { payload }) => state.setIn(['inited', payload], true),
  [TOGGLE_SYNC_RATIO]: (state) => state.set('sync', !state.get('sync')),
}, initialState);
