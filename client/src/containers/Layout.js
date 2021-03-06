import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Artirst from '../components/artist/Artist';
import Album from '../components/album/Album';
import Track from '../components/track/Track';
import './Layout.scss';

const Layout = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/" render={() => <Header withSearch={true} />} />
      </Switch>
      <div className="content">
        <div className="container">
         <Route path="/" exact component={Home} />
         <Route path="/artist/:id" component={Artirst} />
         <Route path="/album/:id" component={Album} />
         <Route path="/track/:id" component={Track} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;