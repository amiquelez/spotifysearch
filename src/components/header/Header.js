import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import Logo from '../../assets/images/spotify_logo.gif';

const Header = (props) => {
    let content = (props.withSearch) ? <SearchBar /> : <h1>SpotySearch</h1>;
    return (
        <header>
            <div className="container">
                <div className="img_container">
                    <img src={Logo} alt="SpotySearch" />
                </div>
                {content}
            </div>
        </header>
    );
}

export default Header;