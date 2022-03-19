import { connect } from "react-redux";
import { fetchLocationByCity } from "../../redux/weather/actions";
import { weatherReducer } from "../../redux/weather/selectors";
import SearchForm from "./SearchForm";

export const mapStateToProps = (state) => ({
  isError: weatherReducer(state).isError,
  isFetching: weatherReducer(state).isFetching,
  errorMessage: weatherReducer(state).errorMessage,
});

const mapDispatchToProps = {
  fetchLocationByCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
