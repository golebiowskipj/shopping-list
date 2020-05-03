import React from 'react';
import { IngredientStyled } from './ingredients-list-item-style';

export const IngredientsListItem = ({ ingredient }) => (
    <IngredientStyled>
        <span>{ingredient.name}</span>
        <span>{ingredient.qty} {ingredient.unit}</span>
    </IngredientStyled>
)