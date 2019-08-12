import React from 'react';

import './Favorites.scss';

const Favorites = props => {
        let favContent = null;
        if(props.items.length > 0){
            const favItems = props.items.map(item => {
                let artistsList = [];
                item.artists.map(item => artistsList.push(item.name));
                return  <li className="content-box" key={item.id}>
                        <div className="img_content">
                            <img src={item.album.images[1].url} alt={item.name} />
                        </div> 
                        <div className="info">
                            <h4>{item.name}</h4>
                            <p>{artistsList.join(", ")}</p>
                            <span>{item.album.name}</span>
                        </div>
                    </li>;
            });
            favContent = <ul className="favorites">{favItems}</ul>;
        }
    return favContent;
}

export default Favorites;