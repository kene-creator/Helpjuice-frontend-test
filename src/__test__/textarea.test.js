import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Textarea from '../components/Textarea';

describe('Textarea', () => {
  it('should render textarea', () => {
    const { getByPlaceholderText } = render(<Textarea />);
    const textarea = getByPlaceholderText(
      'Type / for blocks, @ to link docs to people'
    );
    expect(textarea).toMatchSnapshot();
  });

  it('should open modal when /1 is typed', () => {
    const { getByPlaceholderText, getByText } = render(<Textarea />);
    const textarea = getByPlaceholderText(
      /Type \/ for blocks, @ to link docs to people/
    );

    fireEvent.change(textarea, { target: { value: '/1' } });
    expect(getByText('Add Block')).toMatchSnapshot();
  });

  it('should close modal when text is deleted', () => {
    const { getByPlaceholderText, queryByText } = render(<Textarea />);
    const textarea = getByPlaceholderText(
      /Type \/ for blocks, @ to link docs to people/
    );

    fireEvent.change(textarea, { target: { value: '/1' } });
    fireEvent.change(textarea, { target: { value: '' } });
    expect(queryByText('Add Block')).toBeNull();
  });

  it('should change placeholder when Enter is pressed', () => {
    const { getByPlaceholderText, queryByPlaceholderText } = render(
      <Textarea />
    );
    const textarea = getByPlaceholderText(
      /Type \/ for blocks, @ to link docs to people/
    );

    fireEvent.change(textarea, { target: { value: 'test' } });
    fireEvent.keyDown(textarea, { key: 'Enter', code: 13 });
    expect(
      queryByPlaceholderText(/Type \/ for blocks, @ to link docs to people/)
    ).toBeNull();
    expect(
      getByPlaceholderText(
        'Now this is normal text. All I had to is press / +1, and then type my text and hit Enter/Return'
      )
    ).toMatchSnapshot();
  });

  it('should change textarea value when Enter is pressed', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<Textarea />);
    const textarea = getByPlaceholderText(
      /Type \/ for blocks, @ to link docs to people/
    );

    fireEvent.change(textarea, { target: { value: 'test' } });
    fireEvent.keyDown(textarea, { key: 'Enter', code: 13 });
    expect(getByDisplayValue('')).toMatchSnapshot();
  });
});
