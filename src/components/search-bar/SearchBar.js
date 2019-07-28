import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <form action="" method="POST" className="search-form">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Artist Name ..." />
        </form>
    );
}

export default SearchBar;