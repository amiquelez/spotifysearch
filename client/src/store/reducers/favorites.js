import * as actionTypes from '../actions/actionTypes';

const initialState = {
    favorites: [],
    favoritesData: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.trackId)
            };
        case actionTypes.REMOVE_FAVORITE:
            const newFavorites = state.favorites.filter(favorite => favorite !== action.trackId)
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