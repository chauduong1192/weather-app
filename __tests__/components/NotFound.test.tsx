import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/NotFound';

describe('NotFound component', () => {
  let wrapper;
  const defaultMessage = "An error occurred";

  beforeEach(async () => {
    wrapper = shallow(<NotFound />);
  });

  it('should render without props', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toEqual(defaultMessage);
  });

  it('should render with props', () => {
    const props = {
      message: "test message"
    }
    wrapper.setProps(props);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toEqual(props.message);
  });

  it('should render NotFound with empty message', () => {
    wrapper.setProps({
      message: "",
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toEqual(defaultMessage);
  });
});
