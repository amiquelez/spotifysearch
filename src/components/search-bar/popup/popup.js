import React from 'react';
import './popup.scss';
import { Link } from 'react-router-dom';

const Popup = (props) => {

    let popupContent = null;

    if(props.show){
        popupContent = (
            <ul className="list-suggestion">
                { props.items.map((item) => <li key={item.id}><Link to={`/artist/${item.id}`} onClick={props.click}>{item.name}</Link></li>) }
            </ul>
        );
    }
    
    return popupContent;
}

export default Popup;