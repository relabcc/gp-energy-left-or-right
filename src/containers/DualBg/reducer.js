import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const UPDATE_RATIO = 'Left-or-right/BG/UPDATE_RATIO';

export const updateRatio = createAction(UPDATE_RATIO);

const initialState = fromJS({
  ratio: 0.5,
});

export default handleActions({
  [UPDATE_RATIO]: (state, { payload }) => state.set('ratio', payload),
}, initialState);
