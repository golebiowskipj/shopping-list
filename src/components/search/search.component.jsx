import React, { useContext } from 'react';
import { SearchFieldStyled } from './search.style';
import { GlobalContext } from '../../App';


export const Search = () => {
    const ctx = useContext(GlobalContext);

    return (
        <SearchFieldStyled type="search" onChange={ctx.handleSearch} />
    )
};