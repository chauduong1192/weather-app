import { mapStateToProps } from "../../src/components/App/AppContainer";

describe("AppContainer", () => {
  it("should map state in mapStateToProps", () => {
    const initialState = {
      weather: {
        isFetchingWoe: false,
        isFetched: false,
        woeLocations: [],
      },
    };
    expect(mapStateToProps(initialState)).toEqual(initialState.weather);
  });
});
