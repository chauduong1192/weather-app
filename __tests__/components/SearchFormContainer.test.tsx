import { mapStateToProps } from '../../src/components/SearchForm/SearchFormContainer';

describe('SearchFormContainer', () => {
  it('should map state in mapStateToProps', () => {
    const initialState = {
      weather: {
        isFetching: false,
        isError: false,
        errorMessage: ""
      }
    }
    expect(mapStateToProps(initialState)).toEqual(initialState.weather);
  });
});
