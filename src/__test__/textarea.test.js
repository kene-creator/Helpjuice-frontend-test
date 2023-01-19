import { render, fireEvent } from '@testing-library/react';
import Textarea from '../components/Textarea';

describe('Textarea', () => {
  it('displays the add block when /1 is typed', () => {
    const { getByPlaceholderText, getByText } = render(<Textarea />);
    const textarea = getByPlaceholderText(/Type \//);
    fireEvent.change(textarea, { target: { value: '/1' } });
    const addBlock = getByText(/Add Block/);
    expect(addBlock).toMatchSnapshot();
  });

  it('hides the add block when the callback is triggered', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Textarea />
    );
    const textarea = getByPlaceholderText(/Type \//);
    fireEvent.change(textarea, { target: { value: '/1' } });
    const addBlock = getByText(/Add Block/);
    expect(addBlock).toMatchSnapshot();
  });
});
