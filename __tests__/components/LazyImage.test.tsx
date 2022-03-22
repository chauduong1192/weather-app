import React from "react";
import { shallow } from "enzyme";

import LazyImage from "../../src/components/LazyImage";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
}));

describe("LazyImage Component", () => {
  let wrapper;
  let useEffect;
  let useState;

  const mockUseEffect = () => {
    return useEffect.mockImplementationOnce((f) => f());
  };
  const mockUseState = () => {
    return useState.mockImplementationOnce((x) => [x, true]);
  };
  const useRefMock = jest.spyOn(React, "useRef");

  const props = {
    classname: "",
    src: "",
    alt: "",
    aspectRatio: 1,
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    useState = jest.spyOn(React, "useState");
    wrapper = shallow(<LazyImage {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render LazyImage without props", () => {
    wrapper.setProps({
      aspectRatio: undefined,
    });
    expect(wrapper.length).toBe(1);
  });

  it("should render LazyImage with default props", () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find("img").prop("alt")).toEqual("no alt");
  });

  it("should call onload", () => {
    wrapper.setProps({
      src: "src of main image",
    });
    wrapper.find("img").props().onLoad();
    mockUseEffect();
    jest.spyOn(React, "useRef").mockReturnValue({
      current: {
        complete: true,
      },
    });
    expect(wrapper.find("img").length).toBe(1);
  });

  it("should call useEffect with true", () => {
    mockUseEffect();
    useRefMock.mockReturnValue({
      current: {
        complete: true,
      },
    });
    mockUseState();
    expect(wrapper.find("img").length).toBe(1);
  });
});
