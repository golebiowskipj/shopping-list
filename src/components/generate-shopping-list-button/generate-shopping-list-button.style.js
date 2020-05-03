import styled from 'styled-components';

export const ButtonStyled = styled.button`
    background: ${props => props.type === 'list' ? props.theme.colorPos : props.theme.colorNeg};
    border: none;
    color: white;
    width: fit-content;
    padding: .5rem;
    cursor: pointer;
    display: block;
    margin-left: 1rem;

    &:disabled {
        opacity: .5;

        cursor: not-allowed;
    }
`;