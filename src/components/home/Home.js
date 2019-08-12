import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import SearchBar from '../../shared/search-bar/SearchBar';
import Favorites from '../favorites/Favorites';

class Home extends Component {

    state = {
        favorites: []
    }

    componentDidMount(){
        if(this.props.favorites.length > 0){
            const favIds = this.props.favorites.join(',');
            this.getFavoritesInfo(favIds);
        }
    }

    getFavoritesInfo(favIds){
        const url = `tracks/?ids=${favIds}`;
        axios.get(url).then(response => {
                const data = response.data;
                this.setState({favorites: data.tracks});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <React.Fragment>
                <SearchBar />
                <Favorites items={this.state.favorites} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

export default connect(mapStateToProps)(Home);