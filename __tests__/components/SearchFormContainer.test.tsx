import { mapStateToProps } from "../../src/components/SearchForm/SearchFormContainer";

describe("SearchFormContainer", () => {
  it("should map state in mapStateToProps", () => {
    const initialState = {
      weather: {
        isFetchingCity: false,
        isError: false,
        errorMessage: "",
      },
    };
    expect(mapStateToProps(initialState)).toEqual(initialState.weather);
  });
});
