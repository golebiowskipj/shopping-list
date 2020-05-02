import styled from 'styled-components';

export const ButtonStyled = styled.button`
    background: ${props => props.theme.colorPos};
    border: none;
    color: white;
    width: fit-content;
    padding: .5rem;
    cursor: pointer;
    margin: 0 0 25px auto;
    display: block;

    &:disabled {
        opacity: .5;

        cursor: not-allowed;
    }
`;