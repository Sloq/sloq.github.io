import { connect } from 'react-redux';
// import { booksArray } from '../../reducers/selectors';
import navbarFull from './navbarFull';
import { setMobileState } from './mediaActions';

const mapStateToProps = state => ({
  state
});

// const mapStateToProps = ({mobile}) => ({
//   mobile
// });

const mapDispatchToProps = dispatch => ({
  setMobileState: (mobile) => dispatch(setMobileState(mobile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navbarFull);