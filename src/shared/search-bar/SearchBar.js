import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as action from '../../store/actions';
import Popup from './popup/popup';
import Spinner from '../spinner/Spinner';
import './SearchBar.scss';

class SearchBar extends Component {

    state = {
        showPopup: false
    }

    handleChange = (e) => {
        const value = e.target.value.trim();
        if(value.length >= 1){
            this.props.fetchArtists(value);
            this.setState({ showPopup: true });
        }else{
            this.setState({ showPopup: false });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.artists[0]){
            this.props.history.push(`/artist/${this.props.artists[0].id}`);
            this.setState({ artists: [] });
        }
    }
    
    hidePopup = () => {
        this.setState({ showPopup: false });
    }

    render(){
        let result = <Popup items={this.props.artists} show={this.state.showPopup} click={this.hidePopup} />;
        if(this.props.loading){
            result = <div className="content-spinner"><Spinner /></div>;
        }

        return (
            <form action="" method="POST" className="search-form" onSubmit={this.handleSubmit}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Artist Name ..." onChange={this.handleChange} />
                {result}
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.search.artists,
        loading: state.search.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArtists: (value) => dispatch(action.fetchArtists(value))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));