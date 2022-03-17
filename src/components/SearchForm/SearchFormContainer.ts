import { connect } from 'react-redux';
import { fetchLocationByCity } from '../../redux/weather/actions';
import { weatherReducer } from '../../redux/weather/selectors';
import SearchForm from './SearchForm';

export const mapStateToProps = (state: any) => ({
  isError: weatherReducer(state).isError,
  errorMessage: weatherReducer(state).errorMessage,
  isFetching: weatherReducer(state).isFetching
});

const mapDispatchToProps = {
  fetchLocationByCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);