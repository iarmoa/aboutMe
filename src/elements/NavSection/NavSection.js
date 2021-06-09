import React from 'react';

const NavSection = ({children}) => {
    return (
        <nav className="navbar navbar-expand-lg mh-nav nav-btn">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {children}
            </div>
        </nav>
    )
}

export default NavSection;