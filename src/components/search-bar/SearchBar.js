import React, { Component } from 'react';
import Popup from './popup/popup';
import './SearchBar.scss';

class SearchBar extends Component {

    state = {
        artists: [],
        showPopup: false
    }

    handleChange = (e) => {
        const value = e.target.value.trim();
        if(value.length >= 1){
            this.getArtists(value);
            this.setState({ showPopup: true });
        }else{
            this.setState({ showPopup: false });
        }
    }

    async getArtists(value){
        const url = `https://api.spotify.com/v1/search?q=${value}&type=artist&limit=5`;
        const token = '';
        const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` }});
        const data = await response.json();
        this.setState({ artists: data.artists.items });
    }

    render(){
        return (
            <form action="" method="POST" className="search-form">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Artist Name ..." onChange={this.handleChange} />
                <Popup items={this.state.artists} show={this.state.showPopup} />
            </form>
        );
    }
}

export default SearchBar;