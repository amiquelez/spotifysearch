import React, { Component } from 'react';
import Albums from './albums/Albums';
import './Artist.scss';

class Artirst extends Component {
    
    state = {
        image: '',
        imageWidth: null,
        name: '',
        genres: [],
        albums: [],
        id: null
    }

    componentDidMount(){
        this.getArtistInfo(this.state.id);
    }

    componentDidUpdate() {
        this.getArtistInfo(this.state.id);
    }

    async getArtistInfo(id){
        if(this.state.id !== this.props.match.params.id){
            this.setState({id: this.props.match.params.id});
            const url = `https://api.spotify.com/v1/artists/${this.props.match.params.id}`;
            const token = '';
            try{
                const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` }});
                const data = await response.json();
                this.setState({ image: data.images[2].url, imageWidth: data.images[1].width, name: data.name, genres: data.genres });
            }catch(error) {
                console.log(error)
            }

            const url_albums = `https://api.spotify.com/v1/artists/${this.props.match.params.id}/albums`
            try{
                const response = await fetch(url_albums, { headers: { 'Authorization': `Bearer ${token}` }});
                const data = await response.json();
                this.setState({ albums: data.items });
            }catch(error) {
                console.log(error)
            }
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="artist-content">
                    <img src={this.state.image} alt={this.state.name} style={{ maxWidth: this.state.imageWidth }} />
                    <div className="info">
                        <h2>{this.state.name}</h2>
                        <ul>
                            {this.state.genres.map((gender, index) =>{
                                return <li key={index}>{gender}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <Albums items={this.state.albums} />
            </React.Fragment>
        );
    }
}

export default Artirst;