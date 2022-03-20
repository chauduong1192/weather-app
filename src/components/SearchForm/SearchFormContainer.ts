import { connect } from "react-redux";
import {
  fetchLocationByCity,
  fetchLocationByWoeId,
  setEmptyLocation,
  resetInitState,
} from "../../redux/weather/actions";
import { weatherReducer } from "../../redux/weather/selectors";
import SearchForm from "./SearchForm";

export const mapStateToProps = (state) => ({
  isError: weatherReducer(state).isError,
  isFetchingCity: weatherReducer(state).isFetchingCity,
  isFetched: weatherReducer(state).isFetched,
  isFetchingWoe: weatherReducer(state).isFetchingWoe,
  errorMessage: weatherReducer(state).errorMessage,
  locationSuggestions: weatherReducer(state).locationSuggestions,
});

const mapDispatchToProps = {
  fetchLocationByCity,
  fetchLocationByWoeId,
  setEmptyLocation,
  resetInitState,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
