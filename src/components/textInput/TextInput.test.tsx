import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import TextInput from './TextInput';


let defaultProps: any;

beforeEach(() => {

    defaultProps = {
        value: 'Heloo',
        onChange: jest.fn(),
        placeholder: 'Enter text...',
    };
    render(<TextInput {...defaultProps} />);
});

test('renders TextInput component', () => {
    expect(screen.getByPlaceholderText(/Enter text.../)).toBeInTheDocument();
});
test('checks if value is filled', () => {
    const inputElement = screen.getByPlaceholderText(/Enter text.../) as HTMLInputElement;

    fireEvent.change(inputElement, {target: {value: 'Heloo'}});
    expect(inputElement.value).toBe('Heloo');
});

test('onChange event', () => {
    const inputElement = screen.getByPlaceholderText(/Enter text.../);

    fireEvent.change(inputElement, {target: {value: 'Good By'}});
    expect(defaultProps.onChange).toHaveBeenCalledWith('Good By');
});
