import React, { Component } from 'react';
import axios from 'axios';

import SongList from './song-list/SongList';
import './Album.scss';

class Album extends Component {

    state = {
        image: '',
        name: '',
        artistsList: [],
        release_date: '',
        songs: []
    }

    componentDidMount(){
        this.getAlbumInfo();
        this.getTracks();
    }

    getAlbumInfo(){
        const url = `albums/${this.props.match.params.id}`;
        
         axios.get(url).then(response => {
            const data = response.data;
            let artistsList = [];
            data.artists.map(item => artistsList.push(item.name));
            this.setState({ image: data.images[1].url, name: data.name, artistsList, release_date: data.release_date });
        }).catch(error => {
            console.log(error)
        });
    }

    getTracks(){
        const url = `albums/${this.props.match.params.id}/tracks/`;
        
        axios.get(url).then(response => {
            const data = response.data;
            this.setState({ songs: data.items });
        }).catch(error => {
            console.log(error)
        });
    }

    render(){
        return (
            <React.Fragment>
                <div className="album-content">
                    <div className="img_content">
                        <img src={this.state.image} alt={this.state.name} />
                    </div>
                    <div className="info">
                        <h4>{this.state.name}</h4>
                        <p>{this.state.artistsList.join(", ")}</p>
                        <span>{this.state.release_date.split('-')[0]}</span>
                    </div>
                </div>
                <SongList songs={this.state.songs} />
            </React.Fragment>
        );
    }
}

export default Album;