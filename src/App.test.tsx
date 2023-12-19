import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import App from './App';

beforeEach(() => {
    render(<App/>);
});

test('renders the email input field', () => {
    const EMAIL_PLACEHOLDER = 'Digite seu e-mail...';
    expect(screen.getByPlaceholderText(EMAIL_PLACEHOLDER)).toBeInTheDocument();
});

test('renders the "Cadastrar" button', () => {
    const BUTTON_TO_REGISTER = 'Cadastrar';
    expect(screen.getByRole('button', {name: BUTTON_TO_REGISTER})).toBeInTheDocument();
});

test('entering a value into the email input field', () => {
    const EMAIL_PLACEHOLDER = 'Digite seu e-mail...';
    const emailInput = screen.getByPlaceholderText(EMAIL_PLACEHOLDER) as HTMLInputElement;

    fireEvent.change(emailInput, {target: {value: 'luan@gamil.com'}});
    expect(emailInput.value).toBe('luan@gamil.com');
});

test('clicking the "Cadastrar" button clears the email field', () => {
    const BUTTON_TO_REGISTER = 'Cadastrar';
    const EMAIL_PLACEHOLDER = 'Digite seu e-mail...';

    const getEmailInput = () => screen.getByPlaceholderText(EMAIL_PLACEHOLDER) as HTMLInputElement;
    const getRegisterButton = () => screen.getByRole('button', {name: BUTTON_TO_REGISTER});
    const changeEmailInput = (input: string) => fireEvent.change(getEmailInput(), {target: {value: input}});
    const clickButton = (button: HTMLElement) => fireEvent.click(button);

    changeEmailInput('luan@gamil.com');
    clickButton(getRegisterButton());
    expect(getEmailInput().value).toBe('');
});
