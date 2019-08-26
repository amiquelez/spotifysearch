import * as actionTypes from '../actions/actionTypes';

const initialState = {
    id: null,
    image: '',
    imageWidth: null,
    name: '',
    genres: [],
    albums: [],
    errorInfo: null,
    errorAlbum: null,
    loadingInfo: false,
    loadingAlbum: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARTIST_INFO_START:
            return {
                ...state,
                id: action.id,
                loadingInfo: true
            };
        case actionTypes.FETCH_ARTIST_INFO_SUCCESS:
            const {images, name, genres} = action.data;
            return {
                ...state,
                image: images[0].url, 
                name: name,
                genres: genres,
                errorInfo: false,
                loadingInfo: false
            };
        case actionTypes.FETCH_ARTIST_INFO_FAIL:
            return {
                ...state,
                errorInfo: true,
                loadingInfo: false
            };
        case actionTypes.FETCH_ARTIST_ALBUMS_START:
            return {
                ...state,
                loadingAlbum: true
            };
        case actionTypes.FETCH_ARTIST_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.albums,
                errorAlbum: false,
                loadingAlbum: false
            }
        case actionTypes.FETCH_ARTIST_ALBUMS_FAIL:
            return {
                ...state,
                errorAlbum: true,
                loadingAlbum: false
            }
        default:
            return state;
    }
};

export default reducer;