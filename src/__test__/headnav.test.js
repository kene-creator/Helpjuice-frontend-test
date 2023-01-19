import React from 'react';
import { render } from '@testing-library/react';
import HeadNav from '../components/HeadNav';

describe('HeadNav component', () => {
  it('renders correctly', () => {
    const wrapper = render(<HeadNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
