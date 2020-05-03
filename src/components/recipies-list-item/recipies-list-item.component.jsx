import React from 'react';
import { ListItemStyled } from './recipies-list-item.style';
import { RecipiesControlls } from '../recipies-controlls/recipies-controlls.component';

export const RecipiesListItem = ({ recipie, onClick }) => {
    return <ListItemStyled className='js-listitem' onClick={(e) => {
        if (e.target.classList.contains('js-listitem')) onClick();
    }}>
        <h3 className='js-listitem'>{recipie.name}</h3>
        <RecipiesControlls recipie={recipie} />
    </ListItemStyled>
}