import { connect } from 'react-redux';

export default (SubComp) => connect((state) => ({
  browser: state.get('browser'),
}))(SubComp);
