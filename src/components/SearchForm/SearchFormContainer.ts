import { connect } from 'react-redux';
import { fetchLocationByCity } from '../../redux/weather/actions';
import SearchForm from './SearchForm';

export const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = {
  fetchLocationByCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);