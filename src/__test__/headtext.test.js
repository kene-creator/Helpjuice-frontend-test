import React from 'react';
import { render } from '@testing-library/react';
import HeadText from '../components/HeadText';

describe('HeadText component', () => {
  it('should render correctly', () => {
    const wrapper = render(<HeadText />);
    expect(wrapper).toMatchSnapshot();
  });
});
