/**
 * @jest-environment jsdom
 */
import React, { useRef } from "react";
import { mount, shallow } from "enzyme";
import { SearchForm } from "../../src/components/SearchForm";
import { locationByCity } from "../../src/utils/dataMock";

describe("SearchForm component", () => {
  let wrapper;
  const defaultProps = {
    fetchLocationByCity: jest.fn(),
    fetchLocationByWoeId: jest.fn(),
    setEmptyLocation: jest.fn(),
    resetInitState: jest.fn(),
    isFetchingCity: false,
    isError: false,
    errorMessage: "",
    isFetched: false,
    isFetchingWoe: false,
    locationSuggestions: [],
  };

  beforeEach(async () => {
    wrapper = mount(<SearchForm {...defaultProps} />);
  });

  it("should render with default props", () => {
    expect(wrapper.find(".search-form")).toHaveLength(1);
    expect(wrapper.find(".search-form").find(".input-group")).toHaveLength(1);
  });

  it("should render error message", () => {
    wrapper.setProps({
      isError: true,
      errorMessage: "error message test",
    });
    expect(wrapper.find("NotFound")).toHaveLength(1);
  });

  it("should handle key up if value is null", () => {
    wrapper.find("input").simulate("keyup", {
      key: 111,
    });
  });

  it("should handle key up if type enter", () => {
    wrapper.find("input").simulate("keyup", {
      key: "Enter",
    });
  });

  it("should handle key press ", () => {
    wrapper.find("input").simulate("keypress", {
      key: "Enter",
    });
  });

  it("should handle key press ", () => {
    wrapper.find("input").simulate("keydown", {
      key: 111,
    });
  });

  it("should display suggestion box when having loction data", () => {
    wrapper.setProps({
      locationSuggestions: locationByCity,
    });
    expect(wrapper.find("Suggestion")).toHaveLength(1);
  });

  it("should call handleCitySlected", () => {
    wrapper.setProps({
      locationSuggestions: locationByCity,
    });
    wrapper.find("Suggestion").props().handleCitySelected({
      title: "test",
      woeid: "test",
    });
  });

  it("should call handleButtonClick with isFetched false", () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);
    wrapper.find("button").simulate("click");
  });

  it("should render RemoveIcon when isFetched true", () => {
    wrapper.setProps({
      isFetched: true,
    });
    expect(wrapper.find("svg")).toHaveLength(1);
  });

  it("should render Loader when fetching city or woe", () => {
    wrapper.setProps({
      isFetchingCity: true,
    });
    expect(wrapper.find(".icon-container")).toHaveLength(1);
    wrapper.setProps({
      isFetchingWoe: true,
    });
    expect(wrapper.find(".icon-container")).toHaveLength(1);
  });
});
