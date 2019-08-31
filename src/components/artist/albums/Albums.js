import React from 'react';
import { Link } from 'react-router-dom';
import './Albums.scss';

const Albums = (props) => {
    return (
        <ul className="albums_list">
            {(props.items) ? props.items.map((item) => {
                let artistsList = [];
                item.artists.map(item => artistsList.push(item.name));
                 return <li key={item.id} className="item">
                            <div className="img_content">
                                <Link to={`/album/${item.id}`}><img src={item.images[0].url} alt={item.name} /></Link>
                            </div>
                            <div className="info">
                                <Link to={`/album/${item.id}`}>
                                    <h4>{item.name}</h4>
                                    <p>{artistsList.join(", ")}</p>
                                    <span>{item.release_date.split('-')[0]}</span>
                                </Link>
                            </div>
                        </li>
            }) : null}
        </ul>
    );
}

export default Albums;