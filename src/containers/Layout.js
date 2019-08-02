import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/Header';
import SearchBar from '../components/search-bar/SearchBar';
import Artirst from '../components/artist/Artist';
import './Layout.scss';

const Layout = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Header} />
      <div className="search-content">
        <div className="container">
         <Route path="/" exact component={SearchBar} />
         <Route path="/artist/:id" component={Artirst} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;