import * as actionTypes from './actions';

const initialState = {
    favorites: [],
    favoritesData: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.songId)
            };
        case actionTypes.REMOVE_FAVORITE:
            const newFavorites = state.favorites.filter(favorite => favorite !== action.songId)
            return {
                ...state,
                favorites: newFavorites
            };
        case actionTypes.UPDATE_FAVORITES:
            return {
                ...state,
                favoritesData: action.tracks
            }
        default:
            return state;
    }
};

export default reducer;