import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../store/actions';
import SearchBar from '../../shared/search-bar/SearchBar';
import Favorites from '../favorites/Favorites';

class Home extends Component {

    state = {
        favorites: []
    }

    componentDidMount(){
       this.getFavoritesInfo();
    }

    getFavoritesInfo(){
        if(this.props.favorites.length > 0){
            const favIds = this.props.favorites.join(',');
            const url = `tracks/?ids=${favIds}`;
            axios.get(url).then(response => {
                const data = response.data;
                this.setState({favorites: data.tracks});
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    render(){
        return (
            <React.Fragment>
                <SearchBar />
                <Favorites items={this.state.favorites} removeFavorite={this.props.onRemoveFavorite} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFavorite: (songId) => dispatch({ type: actionTypes.REMOVE_FAVORITE, songId: songId })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);