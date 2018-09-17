import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const SET_HELPFUL = 'App/Home/SET_HELPFUL';
export const TOGGLE_IDO = 'App/Home/TOGGLE_IDO';
export const TOGGLE_WANT_EMAIL = 'App/Home/TOGGLE_WANT_EMAIL';
export const SET_FORM_FIELD = 'App/Home/SET_FORM_FIELD';
export const FORM_SUBMITTED = 'App/Home/FORM_SUBMITTED';

export const setHelpful = createAction(SET_HELPFUL);
export const toggleIdo = createAction(TOGGLE_IDO);
export const toggleWantEmail = createAction(TOGGLE_WANT_EMAIL);
export const setFormField = createAction(SET_FORM_FIELD);
export const setFormSubmitted = createAction(FORM_SUBMITTED);

const initialState = fromJS({
  helpful: null,
  iDo: false,
  wantEmail: false,
  formSubmitted: false,
});

export default handleActions({
  [SET_HELPFUL](state, action) {
    return state.set('helpful', action.payload);
  },
  [TOGGLE_IDO](state) {
    return state.set('iDo', !state.get('iDo'));
  },
  [TOGGLE_WANT_EMAIL](state) {
    return state.set('wantEmail', !state.get('wantEmail'));
  },
  [FORM_SUBMITTED](state) {
    return state.set('formSubmitted', true);
  },
}, initialState);
