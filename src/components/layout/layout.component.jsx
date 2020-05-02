import React from 'react';
import {LayoutStyled} from './layout.style';

export const Layout = ({ children }) => (
    <LayoutStyled>
        {children}
    </LayoutStyled>
);