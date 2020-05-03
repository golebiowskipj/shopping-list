import React, { useContext } from 'react';
import { SearchFieldStyled } from './search.style';
import { GlobalContext } from '../../App';


export const Search = ({ placeholder }) => {
    const ctx = useContext(GlobalContext);

    return (
        <SearchFieldStyled
            placeholder={placeholder}
            type="search"
            onChange={ctx.handleSearch} />
    )
};