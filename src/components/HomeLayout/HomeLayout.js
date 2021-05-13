import React from 'react';
import Menu from '../Menu/Menu';

const HomeLayout = ({children}) => {
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    )
}

export default HomeLayout;