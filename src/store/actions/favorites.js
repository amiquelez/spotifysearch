import * as actionTypes from './actionTypes';

export const addToFavorite = (trackId) => {
     return {
         type: actionTypes.ADD_TO_FAVORITE,
         trackId: trackId
     }
};

export const addToFavoriteAndUpdate = (trackId) => {
    return {
        type: actionTypes.ADD_TO_FAVORITE_AND_UPDATE, 
        trackId: trackId
    }
};

export const removeFavorite = (trackId) => {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        trackId: trackId
    }
};

export const removeFavoriteAndUpdate = (trackId) => {
   return {
       type: actionTypes.REMOVE_FAVORITE_AND_UPDATE, 
       trackId: trackId
   }
};

export const updateFavorites = (tracks) => {
    return {
        type: actionTypes.UPDATE_FAVORITES, 
        tracks: tracks
    }
 };

 export const updateFavoritesAsync = () => {
    return {
        type: actionTypes.UPDATE_FAVORITES_ASYNC
    }
 };