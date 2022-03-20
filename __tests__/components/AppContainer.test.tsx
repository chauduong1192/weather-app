import { mapStateToProps } from "../../src/components/App/AppContainer";

describe("AppContainer", () => {
  it("should map state in mapStateToProps", () => {
    const initialState = {
      weather: {
        isFetchingCity: false,
        isFetched: false,
        isError: false,
        woeid: "",
        query: "",
        errorMessage: "",
        woeLocations: [],
      },
    };
    expect(mapStateToProps(initialState)).toEqual(initialState.weather);
  });
});
