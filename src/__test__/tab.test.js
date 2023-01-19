import React from 'react';
import { render } from '@testing-library/react';
import Tab from '../components/Tab';

describe('Tab component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Tab />);
    expect(wrapper).toMatchSnapshot();
  });
});
