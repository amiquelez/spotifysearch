import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../store/actions';
import SongList from './song-list/SongList';
import Spinner from '../../shared/spinner/Spinner';
import Error from '../../shared/error/Error';

class Album extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.fetchAlbumInfo(id);
        this.props.fetchAlbumTracks(id);
    }

    render(){
        let albumContent = <Error type="ALBUM_INFO" />;
        let tracksContent = <Error type="ALBUM_TRACKS" />;

        if(!this.props.errorInfo){
            albumContent = (
                <div className="content-box">
                    <div className="img_content">
                        <img src={this.props.image} alt={this.props.name} />
                    </div>
                    <div className="info">
                        <h4>{this.props.name}</h4>
                        <p>{this.props.artistsList.join(", ")}</p>
                        <span>{this.props.release_date.split('-')[0]}</span>
                    </div>
                </div>
            );
        }
        if(this.props.loadingInfo){
            albumContent = <Spinner />;
        }

        if(!this.props.errorTracks){
            tracksContent = <SongList songs={this.props.tracks} />;
        }
        if(this.props.loadingTracks){
            tracksContent = <Spinner />;
        }

        return (
            <React.Fragment>
                { albumContent }
                { tracksContent }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        image: state.album.image,
        name: state.album.name,
        artistsList: state.album.artistsList,
        release_date: state.album.release_date,
        tracks: state.album.tracks,
        errorInfo: state.album.errorInfo,
        errorTracks: state.album.errorTracks,
        loadingInfo: state.album.loadingInfo,
        loadingTracks: state.album.loadingTracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbumInfo: (id) => dispatch(action.fetchAlbumInfo(id)),
        fetchAlbumTracks: (id) => dispatch(action.fetchAlbumTracks(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);