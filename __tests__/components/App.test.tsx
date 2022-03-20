import React from "react";
import { shallow } from "enzyme";
import { App } from "../../src/components/App";

describe("App component", () => {
  let wrapper;
  let props = {
    isFetchingWoe: false,
    isFetched: false,
    woeLocations: [],
  };
  beforeEach(async () => {
    wrapper = shallow(<App {...props} />);
  });

  it("should render with default props", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("Connect(SearchForm)")).toHaveLength(1);
  });

  it("should render ForeCastLoader when fetching data", () => {
    wrapper.setProps({
      isFetchingWoe: true,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("ForeCastLoader")).toHaveLength(1);
  });

  it("should render ForeCast when fetched data sucessful", () => {
    wrapper.setProps({
      isFetchingWoe: false,
      isFetched: true,
      woeLocations: [
        {
          dayOfWeek: "2022-03-18",
          maxTemp: 30,
          minTemp: 30,
          weatherStateAbbr: "ln",
        },
        {
          dayOfWeek: "2022-03-19",
          maxTemp: 32,
          minTemp: 33,
          weatherStateAbbr: "lf",
        },
      ],
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("ForecastBox")).toHaveLength(1);
  });
});
