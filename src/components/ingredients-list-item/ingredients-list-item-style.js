import styled from 'styled-components';

export const IngredientStyled = styled.li`
    border-bottom: 1px dashed black;
    font-weight: 300;
    margin-bottom: .5rem;
    padding-bottom: .5rem;

    display: flex;
    justify-content:space-between;

    &>span:last-child {
        font-weight: 500;
    }
`;