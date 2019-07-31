import React from 'react';
import './popup.scss';

const Popup = (props) => {

    let popupContent = null;

    if(props.show){
        popupContent = (
            <ul className="list-suggestion">
                { props.items.map((item) => <li key={item.id}>{item.name}</li>) }
            </ul>
        );
    }
    
    return popupContent;
}

export default Popup;