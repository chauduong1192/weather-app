import { connect } from "react-redux";
import { weatherReducer } from "../../redux/weather/selectors";
import App from "./App";

export const mapStateToProps = (state) => ({
  isFetchingWoe: weatherReducer(state).isFetchingWoe,
  isFetched: weatherReducer(state).isFetched,
  woeLocations: weatherReducer(state).woeLocations,
});

export default connect(mapStateToProps, {})(App);
