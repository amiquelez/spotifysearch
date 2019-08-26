import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions';
import Albums from './albums/Albums';
import Spinner from '../../shared/spinner/Spinner';
import './Artist.scss';

class Artirst extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        if( id !== this.props.id){
            this.props.fetchArtistInfo(id);
            this.props.fetchArtistAlbums(id);
        }
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;
        if( id !== this.props.id){
            this.props.fetchArtistInfo(id);
            this.props.fetchArtistAlbums(id);
        }
    }

    render(){
        let artistContent = 'There was a problem loading the artist info. Please try again.';
        let albumsContent = 'There was a problem loading the albums of the artist. Please try again.';
        if(!this.props.errorInfo){
            artistContent = (
                <React.Fragment>
                    <img src={this.props.image} alt={this.props.name} style={{ maxWidth: this.props.imageWidth }} />
                    <div className="info">
                        <h2>{this.props.name}</h2>
                        <ul>
                            {this.props.genres}
                            {this.props.genres.map((gender, index) =>{
                                return <li key={index}>{gender}</li>
                            })}
                        </ul>
                    </div>
                </React.Fragment>
            );
        }
        if(this.props.loadingInfo){
            artistContent = <Spinner />
        }

        if(!this.props.errorAlbum){
            albumsContent = <Albums items={this.props.albums} />;
        }
        if(this.props.loadingAlbum){
            albumsContent = <Spinner />
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

const mapStateToProps = state => {
    return {
        id: state.artist.id,
        image: state.artist.image,
        imageWidth: state.artist.imageWidth,
        name: state.artist.name,
        genres: state.artist.genres,
        albums: state.artist.albums,
        errorInfo: state.artist.errorInfo,
        errorAlbum: state.artist.errorAlbum,
        loadingInfo: state.artist.loadingInfo,
        loadingAlbum: state.artist.loadingAlbum
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArtistInfo: (id) => dispatch(action.fetchArtistInfo(id)),
        fetchArtistAlbums: (id) => dispatch(action.fetchArtistAlbums(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artirst);