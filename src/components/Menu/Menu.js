import React from 'react';
import navData from '../../data/main-nav-bar.json';
import Header from '../../elements/Header/Header';
import NavSection from '../../elements/NavSection/NavSection';
import { Link } from 'react-router-dom';

const MenuOptions = () => {
    return (
        <ul className="navbar-nav mr-0 ml-auto">
            {navData.map((menu) => {
                return (
                <li key={menu.id} className="nav-item">
                    <Link to={menu.url}>{menu.name}</Link>
                </li>
                )
            })}
        </ul>
    )
}

const Menu = () => {
    return (
        <Header>
            <NavSection>
                <MenuOptions />
            </NavSection>
        </Header>
    );
}

export default Menu;