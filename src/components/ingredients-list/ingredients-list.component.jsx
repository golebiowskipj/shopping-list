import React from 'react';
import { ListStyled } from './ingredients-list.style';
import { IngredientsListItem } from '../ingredients-list-item/ingredients-list-item.component';


export const IngredientsList = ({ ingredients }) => (
    <ListStyled>
        {ingredients.map(ingredient => <IngredientsListItem key={ingredient.id} ingredient={ingredient} />)}
    </ListStyled>
);