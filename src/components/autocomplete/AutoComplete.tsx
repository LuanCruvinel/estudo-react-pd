import React, { useState, JSX } from 'react';

interface AutoCompleteProps {
    items: string[];
    onSelect: (item: string) => void;
}

const AutoComplete = ({ items, onSelect }: AutoCompleteProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleSelectItem = (item: string) => {
        setInputValue('');
        onSelect(item);
    };

    const filteredItems: Array<JSX.Element> = items
        .filter((item) => item.includes(inputValue))
        .map((item, index) => (
            <li key={index} onClick={() => handleSelectItem(item)}>
                {item}
            </li>
        ));

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <ul>{filteredItems}</ul>
        </div>
    );
}

export default AutoComplete;
