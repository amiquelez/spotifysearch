import React from 'react';
import { Link } from 'react-router-dom';

import './SongList.scss';

const SongList = (props) => {
    let songs = props.songs.map(song => {
        return <li key={song.id} className="song_item">
                    <Link to={`/song/${song.id}`}><span>{song.name}</span></Link>
                    <audio controls name="media">
                        <source src={song.preview_url} type="audio/mpeg" />
                    </audio>
                </li>
    });
    return (
        <ul className="songs_list">
            {songs}
        </ul>
    );
}

export default SongList;