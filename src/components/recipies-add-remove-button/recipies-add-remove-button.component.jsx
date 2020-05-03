import React from 'react';
import { ButtonStyled } from './recipies-add-remove-button.style';

export const RecipiesAddRemoveButton = ({ type, onClick }) => (
    <ButtonStyled
        type={type}
        onClick={onClick}
    >
        {type === 'add' ? '+' : '-'}
    </ButtonStyled>
)