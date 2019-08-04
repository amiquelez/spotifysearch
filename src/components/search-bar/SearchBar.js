import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/artist/${this.state.artists[0].id}`);
        this.setState({ artists: [] });
    }
    
    hidePopup = () => {
        this.setState({ showPopup: false });
    }

    async getArtists(value){
        const url = `https://api.spotify.com/v1/search?q=${value}&type=artist&limit=5`;
        const token = '';
        try{
            const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` }});
            const data = await response.json();
            this.setState({ artists: data.artists.items });
        }catch(error) {
            console.log(error)
        }
    }

    render(){
        return (
            <form action="" method="POST" className="search-form" onSubmit={this.handleSubmit}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Artist Name ..." onChange={this.handleChange} />
                <Popup items={this.state.artists} show={this.state.showPopup} click={this.hidePopup} />
            </form>
        );
    }
}

export default withRouter(SearchBar);