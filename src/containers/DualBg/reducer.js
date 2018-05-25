import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { titles } from '../../text';

export const UPDATE_RATIO = 'Left-or-right/BG/UPDATE_RATIO';
export const TOGGLE_SYNC_RATIO = 'Left-or-right/BG/TOGGLE_SYNC_RATIO';
export const INTRO_PLAY_FINISHED = 'Left-or-right/BG/INTRO_PLAY_FINISHED';
export const SET_INITED = 'Left-or-right/BG/SET_INITED';
export const FIRST_DRAGGED = 'Left-or-right/BG/FIRST_DRAGGED';
export const PALY_INTRO = 'Left-or-right/BG/PALY_INTRO';

export const updateRatio = createAction(UPDATE_RATIO);
export const toggleSyncRatio = createAction(TOGGLE_SYNC_RATIO);
export const introPlayFinished = createAction(INTRO_PLAY_FINISHED);
export const setInited = createAction(SET_INITED);
export const firstDragged = createAction(FIRST_DRAGGED);
export const playIntro = createAction(PALY_INTRO);

const initialState = fromJS({
  ratio: 0.5,
  sync: false,
  inited: titles.slice().fill(false),
  showHint: true,
  introPlayRequested: false,
  introPlayed: false,
});

export default handleActions({
  [UPDATE_RATIO]: (state, { payload }) =>
    state.set('ratio', payload),
  [SET_INITED]: (state, { payload }) =>
    state.setIn(['inited', payload], true),
  [TOGGLE_SYNC_RATIO]: (state) => state.set('sync', !state.get('sync')),
  [FIRST_DRAGGED]: (state) => state.set('showHint', false),
  [PALY_INTRO]: (state) => state.set('introPlayRequested', true),
  [INTRO_PLAY_FINISHED]: (state) => state
    .set('sync', false)
    .set('introPlayed', true),
}, initialState);
