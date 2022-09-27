import { connect } from 'react-redux';
import navbar from './navbar';
import { setMobileState } from './mediaActions';

const mapStateToProps = ({mobile}) => ({
  mobile: mobile.mobile
});

const mapDispatchToProps = dispatch => ({
  setMobileState: (mobile) => dispatch(setMobileState(mobile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navbar);