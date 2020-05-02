import React from 'react';
import { ListStyled } from './recipies-list.style';
import { RecipiesListItem } from '../recipies-list-item/recipies-list-item.component';

export const RecipiesList = ({ recipies }) => (
    <ListStyled>
        {recipies.map(recipie => (<RecipiesListItem key={recipie.id} recipie={recipie} />))}
    </ListStyled>
);
