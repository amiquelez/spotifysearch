import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../search-bar/SearchBar';
import Logo from '../../assets/images/spotify_logo.gif';

const Header = (props) => {
    let content = (props.withSearch) ? <SearchBar /> : <h1>SpotySearch</h1>;
    return (
        <header>
            <div className="container">
                <div className="img_container">
                    <Link to="/"><img src={Logo} alt="SpotySearch" /></Link>
                </div>
                {content}
            </div>
        </header>
    );
}

export default Header;