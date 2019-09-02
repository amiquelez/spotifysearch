import React, { Component } from 'react';
import Layout from '../../containers/Layout';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import * as action from '../../store/actions';
import * as constant from '../../constants';

class App extends Component {

  constructor(props){
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if(token && token !== this.props.token){
      this.props.setAuthToken(token);
    }
    axios.defaults.baseURL = constant.API_URL;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  
  render(){
  const content = (this.props.token) ? <Layout /> : <a href="http://localhost:8888/login" className="login-spotify">Login with Spotify</a>;

    return (
      <BrowserRouter>
        {content}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthToken: (token) => dispatch(action.authSetToken(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
