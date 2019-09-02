import * as actionTypes from '../actions/actionTypes';

const initialState = {
    image: '',
    name: '',
    artistsList: [],
    release_date: '',
    tracks: [],
    errorInfo: false,
    errorTracks: false,
    loadingInfo: false,
    loadingTracks: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ALBUM_INFO_START:
            return {
                ...state,
                loadingInfo: true
            };
        case actionTypes.FETCH_ALBUM_INFO_SUCCESS:
            const {images, name, release_date, artists} = action.data;
            let artistsList = [];
            artists.map(item => artistsList.push(item.name));
            return {
                ...state,
                image: images[0].url, 
                name, 
                artistsList, 
                release_date,
                errorInfo: false,
                loadingInfo: false
            };
        case actionTypes.FETCH_ALBUM_INFO_FAIL:
            return {
                ...state,
                errorInfo: true,
                loadingInfo: false
            };
        case actionTypes.FETCH_ALBUM_TRACKS_START:
            return {
                ...state,
                loadingTracks: true
            };
        case actionTypes.FETCH_ALBUM_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.data,
                errorTracks: false,
                loadingTracks: false
            };
        case actionTypes.FETCH_ALBUM_TRACKS_FAIL:
            return {
                ...state,
                errorTracks: true,
                loadingTracks: false
            };
        default:
            return state;
    }
}

export default reducer;