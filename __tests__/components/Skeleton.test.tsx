import React from 'react';
import { shallow } from 'enzyme';
import Skeleton from '../../src/components/Skeleton';

describe('Skeleton component', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallow(<Skeleton />);
  });

  it('should render Skeleton without props', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.hasClass('skeleton') ).toBeTruthy();
  });

  it('should render Skeleton with classname', () => {
    const props = {
      className: "skeraton-className",
    }
    wrapper.setProps(props);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.hasClass(props.className)).toBeTruthy();
  });
});
