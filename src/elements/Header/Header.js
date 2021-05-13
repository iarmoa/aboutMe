import React from 'react';

const Header = ({children}) => {
    return (
        <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;