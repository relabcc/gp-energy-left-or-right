import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  toggleIdo,
  toggleWantEmail,
  setHelpful,
  setFormSubmitted,
} from './reducer';

import {
  makeSelectIdo,
  makeSelectHelpScore,
  makeSelectFormSubmmited,
  makeSelectWantEmail,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  iDo: makeSelectIdo(),
  helpScore: makeSelectHelpScore(),
  formSubmitted: makeSelectFormSubmmited(),
  wantEmail: makeSelectWantEmail(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleIdo,
  setHelpful,
  setFormSubmitted,
  toggleWantEmail,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
