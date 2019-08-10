import React, { Component } from 'react';
import axios from 'axios';

class Song extends Component {

    state = {
        songName: '',
        artistName: [],
        albumName: '',
        image: '',
        songSource: ''
    }

    componentDidMount(){
        this.getTrack();
    }

    getTrack(){
        const url = `tracks/${this.props.match.params.id}`;

        axios.get(url).then(response => {
            const data = response.data;
            let artistsList = [];
            data.artists.map(item => artistsList.push(item.name));
            this.setState({ songName: data.name, artistName: artistsList, albumName: data.album.name, image: data.album.images[1].url, songSource: data.preview_url });
        }).catch(error => {
            console.log(error)
        });
    }

    render(){
        return(
            <div className="content-box">
                <div className="img_content">
                    <img src={this.state.image} alt={this.state.songName} />
                </div>
                <div className="info">
                    <h4>{this.state.songName}</h4>
                    <p>{this.state.artistName.join(", ")}</p>
                    <span>{this.state.albumName}</span>
                    <div className="audio">
                        <audio controls name="media">
                            <source src={this.state.songSource} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        );
    }
}

export default Song;