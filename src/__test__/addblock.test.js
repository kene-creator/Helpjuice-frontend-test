import React from 'react';
import { render } from '@testing-library/react';
import AddBlock from '../components/AddBlock';

describe('AddBlock', () => {
  it('renders correctly', () => {
    const wrapper = render(<AddBlock visible={true} callback={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
