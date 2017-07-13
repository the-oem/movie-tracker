import { connect } from 'react-redux';
import App from '../../components/app.jsx';

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: () => dispatch(makeFetchCall()),
//   };
// };

export default connect(mapStateToProps, null)(App);
