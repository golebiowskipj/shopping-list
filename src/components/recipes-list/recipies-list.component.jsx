import React from 'react';
import { ListStyled } from './recipies-list.style';
import { RecipiesListItem } from '../recipies-list-item/recipies-list-item.component';
import { Modal } from '../modal/modal.component';
import { RecipieDetails } from '../recipie-details/recipie-details.component';

export const RecipiesList = ({ recipies }) => (
    <ListStyled>
        {recipies.map(recipie => (
            <Modal
                key={recipie.id}
                activator={setShow => <RecipiesListItem
                    key={recipie.id}
                    recipie={recipie}
                    onClick={(e) => setShow(true)} />}
            >
                <RecipieDetails
                    recipie={recipie}
                />
            </Modal>
        ))}
    </ListStyled>
);

