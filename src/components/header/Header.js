import React from 'react';
import Logo from '../../assets/images/spotify_logo.gif';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="img_container">
                    <img src={Logo} alt="SpotySearch" />
                </div>
                <h1>SpotySearch</h1>
            </div>
        </header>
    );
}

export default Header;