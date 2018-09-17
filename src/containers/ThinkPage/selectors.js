import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectIdo = () => createSelector(
  selectHome,
  (homeState) => homeState.get('iDo')
);

const makeSelectWantEmail = () => createSelector(
  selectHome,
  (homeState) => homeState.get('wantEmail')
);

const makeSelectHelpScore = () => createSelector(
  selectHome,
  (homeState) => homeState.get('helpful')
);

const makeSelectFormSubmmited = () => createSelector(
  selectHome,
  (homeState) => homeState.get('formSubmitted')
);

export {
  selectHome,
  makeSelectIdo,
  makeSelectHelpScore,
  makeSelectFormSubmmited,
  makeSelectWantEmail,
};
