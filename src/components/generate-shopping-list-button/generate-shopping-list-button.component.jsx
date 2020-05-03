import React from 'react';
import { ButtonStyled } from './generate-shopping-list-button.style';

export const GenerateShoppingListButton = ({ onClick, disabled, text, type }) => (
    <ButtonStyled
        type={type}
        disabled={disabled}
        onClick={onClick}
    >
        {text}
    </ButtonStyled>
)