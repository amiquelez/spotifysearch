import * as actionTypes from './actions';

const initialState = {
    favorites: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_FAVORITE:
            return {
                favorites: state.favorites.concat(action.songId)
            };
        case actionTypes.REMOVE_FAVORITE:
            const newFavorites = state.favorites.filter(favorite => favorite !== action.songId)
            return {
                favorites: newFavorites
            };
        default:
            return state;
    }
};

export default reducer;