import styled from 'styled-components';

export const ListItemStyled = styled.li`
    width: 100%;
    padding: 1rem;
    margin-bottom: .25rem;
    border: 1px solid ${props => props.theme.colorPrimary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .2s linear;

    &:hover {
        box-shadow: 0 0 5px #ccc;
    }

    h3 {
        font-weight: 300;
        font-size: 1.2rem;
    }
`;