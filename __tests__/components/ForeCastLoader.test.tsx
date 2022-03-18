import React from 'react';
import { shallow } from 'enzyme';
import ForeCastLoader from '../../src/components/ForeCastLoader';

describe('ForeCastLoader component', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallow(<ForeCastLoader />);
  });

  it('should render without props', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.forecast-box').children().length).toEqual(5);
  });

  it('should render with props', () => {
    const props = {
      className: 'forecast-test-class',
    };
    expect(wrapper.find('.forecast-box').children().length).toEqual(5);
  });
});
