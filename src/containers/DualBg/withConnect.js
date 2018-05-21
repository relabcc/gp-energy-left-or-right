import { compose } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reducer, {
  updateRatio,
  toggleSyncRatio,
  setInited,
  firstDragged,
  playIntro,
  introPlayFinished,
} from './reducer';

import injectReducer from '../../utils/injectReducer';

const mapStateToProps = (state) => ({
  ratio: state.getIn(['BG', 'ratio']),
  ratioSync: state.getIn(['BG', 'sync']),
  inited: state.getIn(['BG', 'inited']),
  showHint: state.getIn(['BG', 'showHint']),
  introPlayRequested: state.getIn(['BG', 'introPlayRequested']),
  introPlayed: state.getIn(['BG', 'introPlayed']),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateRatio,
  toggleSyncRatio,
  setInited,
  firstDragged,
  playIntro,
  introPlayFinished,
}, dispatch);

const withReducer = injectReducer({ key: 'BG', reducer });

export default (SubComp) => compose(
  withReducer,
  connect(mapStateToProps, mapDispatchToProps)
)(SubComp);
