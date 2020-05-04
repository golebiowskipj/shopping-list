import styled from 'styled-components';

export const SearchFieldStyled = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin: 2rem auto;
    display: block;
    border: 1px solid ${props => props.theme.colorPrimaryDarker};
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;

    &:focus {
        outline-color: black;
        outline-width: 1px;
    }
`;