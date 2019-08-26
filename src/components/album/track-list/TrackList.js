import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actions';
import './TrackList.scss';

const TrackList = (props) => {
    let tracks = props.tracks.map(track => {
        let star = <div className="add_favorite star-content" onClick={() => props.onAddToFavorite(track.id)}>
                        <i className="far fa-star"></i>
                    </div>;
        if(props.favorites.includes(track.id)){
            star =  <div className="remove_favorite star-content" onClick={() => props.onRemoveFavorite(track.id)}>
                        <i className="fas fa-star"></i>
                    </div>;
        }
        return <li key={track.id} className="track_item">
                    <Link to={`/track/${track.id}`}><span>{track.name}</span></Link>
                    <div className="audio_content">
                        <audio controls name="media">
                            <source src={track.preview_url} type="audio/mpeg" />
                        </audio>
                        { star }
                    </div>
                </li>
    });
    return (
        <ul className="tracks_list">
            {tracks}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToFavorite: (trackId) => dispatch(actionCreators.addToFavoriteAndUpdate(trackId)),
        onRemoveFavorite: (trackId) => dispatch(actionCreators.removeFavoriteAndUpdate(trackId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);