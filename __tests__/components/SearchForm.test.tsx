/**
 * @jest-environment jsdom
*/
import React from 'react';
import { mount } from 'enzyme';
import { SearchForm } from '../../src/components/SearchForm';

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('SearchForm component', () => {
  let wrapper;
  const defaultProps = {
    isFetching: false,
    isError: false,
    errorMessage: "",
    fetchLocationByCity: jest.fn()
  }
  beforeEach(async () => {
    wrapper = mount(<SearchForm {...defaultProps} />);
  });

  it('should render with default props', () => {
    expect(wrapper.find('.search-form')).toHaveLength(1);
    expect(wrapper.find('.search-form').find('.input-group')).toHaveLength(1);
  });

  it('should render error message', () => {
    wrapper.setProps({
      isError: true,
      errorMessage: "error message test",
    });
    expect(wrapper.find('NotFound')).toHaveLength(1);
  });

  it('should click button search', async () => {
    expect(wrapper.find('NotFound')).toHaveLength(0);
    const preventDefault = jest.fn()
    wrapper.find('button').simulate('click', {
      preventDefault
    });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should call onChange of input', async () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'ho chi minh'
      }
    });
    expect(wrapper.find('input').instance().value).toEqual('ho chi minh')
  });
});
