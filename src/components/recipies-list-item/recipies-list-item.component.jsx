import React from 'react';
import { ListItemStyled } from './recipies-list-item.style';
import { RecipiesControlls } from '../recipies-controlls/recipies-controlls.component';

export const RecipiesListItem = ({ recipie }) => {
    return <ListItemStyled>
        <h3>{recipie.name}</h3>
        <RecipiesControlls recipie={recipie}/>
    </ListItemStyled>
}