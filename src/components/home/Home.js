import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions';
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
        favorites: state.fav.favorites,
        tracks: state.fav.favoritesData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveFavorite: (trackId) => dispatch(action.removeFavoriteAndUpdate(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);