import { compose } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reducer, { updateRatio, toggleSyncRatio } from './reducer';

import injectReducer from '../../utils/injectReducer';

const mapStateToProps = (state) => ({
  ratio: state.getIn(['BG', 'ratio']),
  ratioSync: state.getIn(['BG', 'sync']),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateRatio, toggleSyncRatio }, dispatch);

const withReducer = injectReducer({ key: 'BG', reducer });

export default (SubComp) => compose(
  withReducer,
  connect(mapStateToProps, mapDispatchToProps)
)(SubComp);
