import styled from 'styled-components';

export const ControllsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;

    & > * {
        margin-bottom: 1rem;
    }


    @media(min-width: 450px) {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        & > * {
            margin-bottom: 0;
        }
    }

   
`;