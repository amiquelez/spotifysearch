import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import SearchBar from '../../shared/search-bar/SearchBar';
import Favorites from '../favorites/Favorites';

const Home = (props) => {
    return (
        <React.Fragment>
            <SearchBar />
            <Favorites items={props.tracks} removeFavorite={props.onRemoveFavorite} />
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        tracks: state.favoritesData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFavorite: (songId) => dispatch({ type: actionTypes.REMOVE_FAVORITE_AND_UPDATE, songId: songId })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);