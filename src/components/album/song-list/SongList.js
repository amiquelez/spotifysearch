import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actions';
import './SongList.scss';

const SongList = (props) => {
    let songs = props.songs.map(song => {
        let star = <div className="add_favorite star-content" onClick={() => props.onAddToFavorite(song.id)}>
                        <i className="far fa-star"></i>
                    </div>;
        if(props.favorites.includes(song.id)){
            star =  <div className="remove_favorite star-content" onClick={() => props.onRemoveFavorite(song.id)}>
                        <i className="fas fa-star"></i>
                    </div>;
        }
        return <li key={song.id} className="song_item">
                    <Link to={`/song/${song.id}`}><span>{song.name}</span></Link>
                    <div className="audio_content">
                        <audio controls name="media">
                            <source src={song.preview_url} type="audio/mpeg" />
                        </audio>
                        { star }
                    </div>
                </li>
    });
    return (
        <ul className="songs_list">
            {songs}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToFavorite: (songId) => dispatch(actionCreators.addToFavoriteAndUpdate(songId)),
        onRemoveFavorite: (songId) => dispatch(actionCreators.removeFavoriteAndUpdate(songId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);