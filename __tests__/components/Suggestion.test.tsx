import React, { useRef } from "react";
import { shallow } from "enzyme";
import Suggestion from "../../src/components/Suggestion";
import { locationByCity } from "../../src/utils/dataMock";

describe("Suggestion component", () => {
  let wrapper;
  const defaultProps = {
    locations: [],
    keyword: "",
    handleCitySelected: jest.fn(),
  };

  beforeEach(async () => {
    wrapper = shallow(<Suggestion {...defaultProps} />);
  });

  it("should render with default props", () => {
    expect(wrapper.find(".search-suggestion")).toHaveLength(1);
    expect(wrapper.find(".options").children()).toHaveLength(0);
  });

  it("should display suggestion if having locations", () => {
    wrapper.setProps({
      locations: locationByCity,
    });
    expect(wrapper.find(".options").children()).toHaveLength(1);
  });

  it("should handleClickOption", () => {
    wrapper.setProps({
      locations: locationByCity,
      keyword: "ho chi minh",
    });
    expect(wrapper.find(".options").children()).toHaveLength(1);
    wrapper.find("li").simulate("click", {
      title: "San Francisco",
      woeid: 2487956,
    });
    expect(wrapper.find("Highlighter")).toHaveLength(1);
  });
});
