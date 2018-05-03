import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRatio } from './reducer';

const mapStateToProps = (state) => ({ ratio: state.getIn(['BG', 'ratio']) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateRatio }, dispatch);

export default (SubComp) => connect(mapStateToProps, mapDispatchToProps)(SubComp);
