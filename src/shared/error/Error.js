import React from 'react';

import './Error.scss';
import * as error from './errorLogs';

const Error = (props) => {
    let errorMsg;
    switch(props.type){
        case "ARTIST_INFO":
            errorMsg =  error.ARTIST_INFO;
            break;
        case "ARTIST_ALBUMS":
            errorMsg =  error.ARTIST_ALBUMS;
            break;
        case "ALBUM_INFO":
            errorMsg = error.ALBUM_INFO;
            break;
        case "ALBUM_TRACKS":
            errorMsg = error.ALBUM_TRACKS;
            break;
        default:
            errorMsg = error.GENERAL;
    }
    return <div className="error-box"><i className="fa fa-times-circle"></i> {errorMsg}</div>;
}

export default Error;