import React from 'react';
import { shallow } from 'enzyme';
import { Forecast } from '../../src/components/Forecast';

describe('Forecast component', () => {
  let wrapper;
  let props = {
    dayOfWeek: "2022-03-18",
    maxTemp: 30,
    minTemp: 30,
    weatherStateAbbr: "ln",
  }
  beforeEach(async () => {
    wrapper = shallow(<Forecast {...props} />);
  });

  it('should render with props', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.forecast').children().length).toEqual(4);
    expect(wrapper.find('.forecast').find('.title').text()).toEqual('Friday');
  });
});
