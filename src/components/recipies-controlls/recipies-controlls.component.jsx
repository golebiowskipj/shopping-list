import React, { useContext } from 'react';
import { RecipiesAddRemoveButton } from '../recipies-add-remove-button/recipies-add-remove-button.component';
import { RecipiesCounter } from '../recipies-counter/recipies-counter.component';
import { RecipiesControllsStyled } from './recipies-controlls.style';
import { GlobalContext } from '../../App';

export const RecipiesControlls = ({ recipie }) => {
    const ctx = useContext(GlobalContext);
    return <RecipiesControllsStyled>
        <RecipiesAddRemoveButton
            type="add"
            onClick={() => ctx.addRecipie(recipie)}
        />
        <RecipiesCounter
            count={recipie.count}
        />
        <RecipiesAddRemoveButton
            type="remove"
            onClick={() => ctx.removeRecipie(recipie)}
        />
    </RecipiesControllsStyled>
};