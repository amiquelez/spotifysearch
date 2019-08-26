import * as actionTypes from '../actions/actionTypes';

const initialState = {
    trackName: '',
    artistName: [],
    albumName: '',
    image: '',
    trackSource: '',
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_TRACK_INFO_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_TRACK_INFO_SUCCESS:
            const {name, artists, album, preview_url} = action.data
            let artistsList = [];
            artists.map(item => artistsList.push(item.name));
            return {
                ...state,
                trackName: name, 
                artistName: artistsList, 
                albumName: album.name, 
                image: album.images[0].url, 
                trackSource: preview_url,
                loading: false
            }
        case actionTypes.FETCH_TRACK_INFO_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state;
    }
};

export default reducer;

