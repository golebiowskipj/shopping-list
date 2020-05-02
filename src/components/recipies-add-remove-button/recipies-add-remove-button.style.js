import styled from 'styled-components';

export const ButtonStyled = styled.button`
    border: 1px solid ${props => props.type === 'add' ? props.theme.colorPos : props.theme.colorNeg};
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    background: transparent;

    &:focus {
        outline-color: ${props => props.type === 'add' ? props.theme.colorPos : props.theme.colorNeg};
        outline-width: 2px;
    }
`;