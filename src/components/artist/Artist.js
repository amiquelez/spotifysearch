import React, { Component } from 'react';
import axios from 'axios';

import Albums from './albums/Albums';
import './Artist.scss';

class Artirst extends Component {
    
    state = {
        image: '',
        imageWidth: null,
        name: '',
        genres: [],
        albums: [],
        id: null,
        errorArtist: false,
        errorAlbums: false
    }

    componentDidMount(){
        this.getArtistInfo(this.state.id);
    }

    componentDidUpdate() {
        this.getArtistInfo(this.state.id);
    }

    getArtistInfo(id){
        if(this.state.id !== this.props.match.params.id){
            this.setState({id: this.props.match.params.id});
            const url = `artists/${this.props.match.params.id}`;
            axios.get(url).then(response => {
                    const data = response.data;
                    this.setState({ image: data.images[2].url, imageWidth: data.images[1].width, name: data.name, genres: data.genres });
                })
                .catch(error => {
                    this.setState({ errorArtist: true });
                });

            const url_albums = `artists/${this.props.match.params.id}/albums`
                axios.get(url_albums).then(response => {
                        const data = response.data;
                        this.setState({ albums: data.items });
                    })
                    .catch(error => {
                        this.setState({ errorAlbums: true });
                    });
        }
    }

    render(){
        let artistContent = 'There was a problem loading the artist info. Please try again.';
        let albumsContent = 'There was a problem loading the albums of the artist. Please try again.';
        if(!this.state.errorArtist){
            artistContent = (
                <React.Fragment>
                    <img src={this.state.image} alt={this.state.name} style={{ maxWidth: this.state.imageWidth }} />
                    <div className="info">
                        <h2>{this.state.name}</h2>
                        <ul>
                            {this.state.genres.map((gender, index) =>{
                                return <li key={index}>{gender}</li>
                            })}
                        </ul>
                    </div>
                </React.Fragment>
            );
        }
        if(!this.state.errorAlbums){
            albumsContent = <Albums items={this.state.albums} />;
        }
        return (
            <React.Fragment>
                <div className="artist-content">
                    {artistContent}
                </div>
                {albumsContent}
            </React.Fragment>
        );
    }
}

export default Artirst;