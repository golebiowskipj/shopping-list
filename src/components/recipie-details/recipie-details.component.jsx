import React from 'react';
import { Name } from './recipie-details.style';
import { IngredientsList } from '../ingredients-list/ingredients-list.component';

export const RecipieDetails = ({ recipie }) => {
    return (<>
        <Name>
            {recipie.name}
        </Name>
        <IngredientsList ingredients={recipie.ingredients} />
    </>)
}