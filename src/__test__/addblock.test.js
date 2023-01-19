import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AddBlock from '../components/AddBlock';

afterEach(cleanup);

test('AddBlock component', () => {
  const callback = jest.fn();
  const { getByText } = render(<AddBlock callback={callback} />);

  const heading1 = getByText('Heading 1');
  const expendableHeading1 = getByText('Expendable Heading 1');

  expect(heading1).toMatchSnapshot();
  expect(expendableHeading1).toMatchSnapshot();
});
