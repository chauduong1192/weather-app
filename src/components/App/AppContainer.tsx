import { connect } from 'react-redux';
import { fetchLocationByCity } from '../../redux/weather/actions';
import { weatherReducer } from '../../redux/weather/selectors';
import { WeatherState } from '../../redux/weather/reducer';
import App from './App';

export const mapStateToProps = state => ({
  ...weatherReducer(state)
});

const mapDispatchToProps = {
  fetchLocationByCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);