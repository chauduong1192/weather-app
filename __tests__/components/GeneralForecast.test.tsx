import React from "react";
import { shallow } from "enzyme";
import GeneralForecast from "../../src/components/GeneralForecast";

describe("GeneralForecast component", () => {
  let wrapper;
  let props = {
    dayOfWeek: "2022-03-18",
    maxTemp: 30,
    minTemp: 30,
    weatherStateAbbr: "hr",
    theTemp: 30,
    weaTherState: "Heavy Rain",
    title: "London",
  };
  beforeEach(async () => {
    wrapper = shallow(<GeneralForecast {...props} />);
  });

  it("should render with props", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(".general-forecast").children().length).toEqual(2);
    expect(
      wrapper.find(".general-forecast").find(".day-of-week").text()
    ).toEqual("Friday");
  });
});
