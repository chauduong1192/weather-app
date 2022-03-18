import React from 'react';
import { shallow } from 'enzyme';
import ForecastBox from '../../src/components/Forecast';

describe('ForecastBox component', () => {
  let wrapper;
  let props = {
    woeLocations: [],
  }

  beforeEach(async () => {
    wrapper = shallow(<ForecastBox {...props} />);
  });

  it('should render with empty array', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('div').text()).toEqual('Empty Data');
  });

  it('should render with data', () => {
    const props = {
      woeLocations: [
        {
          dayOfWeek: "20-12-2022",
          maxTemp: 30,
          minTemp: 30,
          weatherStateAbbr: "ln",
        },
        {
          dayOfWeek: "20-12-2022",
          maxTemp: 30,
          minTemp: 30,
          weatherStateAbbr: "ln",
        }
      ]
    }
    wrapper.setProps(props);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.forecast-box').children().length).toEqual(2);
  });
});
