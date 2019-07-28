import React from 'react';
import Header from '../components/header/Header';
import SearchBar from '../components/search-bar/SearchBar';
import './Layout.scss';

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="search-content">
        <div className="container">
         <SearchBar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;