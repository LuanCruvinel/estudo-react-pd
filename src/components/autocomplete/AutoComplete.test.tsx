import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import AutoComplete from "./AutoComplete";

let defaultProps: any;

beforeEach(() => {
    defaultProps = {
        items: ['Goiânia', 'São Paulo', 'Rio de Janeiro', 'Pará'],
        onSelect: jest.fn()
    };
    render(<AutoComplete {...defaultProps} />);
});

test('renders AutoComplete component', () => {
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
});
test('displays filtered items based on input', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'P'} });
    const filteredItems = screen.getAllByRole('listitem');
    expect(filteredItems).toHaveLength(2);


});
test('handles item selection', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, {target: {value: 'G'}});
    const filteredItem = screen.getByText('Goiânia');
    fireEvent.click(filteredItem);
    expect(defaultProps.onSelect).toHaveBeenCalledWith('Goiânia');
});