import styled from 'styled-components';

export const ButtonStyled = styled.button`
    border: 1px solid ${props => props.type === 'add' ? props.theme.colorPos : props.theme.colorNeg};
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    background: transparent;
    transition: all .2s linear;

    &:focus {
        outline-color: ${props => props.type === 'add' ? props.theme.colorPos : props.theme.colorNeg};
        outline-width: 2px;
    }

    &:hover {
        box-shadow: 0 0 3px ${props => props.type === 'add' ? props.theme.colorPos : props.theme.colorNeg};
        opacity: .6;
    }
`;