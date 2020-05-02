import styled from 'styled-components';

export const SearchFieldStyled = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 2rem auto;
    display: block;
    border: 1px solid ${props => props.theme.colorPrimaryDarker};

    &:focus {
        outline-color: black;
        outline-width: 1px;
    }
`;