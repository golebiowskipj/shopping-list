import styled from 'styled-components';

export const ListItemStyled = styled.li`
    width: 100%;
    padding: 1rem;
    margin-bottom: .25rem;
    border: 1px solid ${props => props.theme.colorPrimary};
    display: flex;
    align-items: center;

    &:hover {
        box-shadow: 0 0 5px #ccc;
    }
`;