import React from 'react';

const NavSection = ({children}) => {
    return (
        <nav className="navbar navbar-expand-lg mh-nav nav-btn">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {children}
            </div>
        </nav>
    )
}

export default NavSection;