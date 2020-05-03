import React from 'react';
import { ButtonStyled } from './generate-shopping-list-button.style';

export const GenerateShoppingListButton = ({ onClick, disabled }) => (<ButtonStyled disabled={disabled} onClick={onClick}>Lista zakupów</ButtonStyled>)