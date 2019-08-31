import React from 'react';
import { Link } from 'react-router-dom';

import './Favorites.scss';

const Favorites = props => {
        let favContent = null;
        if(props.items && props.items.length > 0){
            const favItems = props.items.map(item => {
                let artistsList = [];
                item.artists.map(item => artistsList.push(item.name));
                return  <li className="content-box" key={item.id}>
                        <div className="img_content">
                            <Link to={`/track/${item.id}`}>
                                <img src={item.album.images[1].url} alt={item.name} />
                            </Link>
                        </div> 
                        <div className="info">
                            <Link to={`/track/${item.id}`}>
                                <h4>{item.name}</h4>
                                <p>{artistsList.join(", ")}</p>
                                <span>{item.album.name}</span>
                            </Link>
                        </div>
                        <button className="btn_remove" onClick={() => props.removeFavorite(item.id)}>Remove</button>
                    </li>;
            });
            favContent = <ul className="favorites">{favItems}</ul>;
        }
    return favContent;
}

export default Favorites;