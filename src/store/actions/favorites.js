import * as actionTypes from './actionTypes';

export const addToFavorite = (songId) => {
     return {
         type: actionTypes.ADD_TO_FAVORITE,
         songId: songId
     }
};

export const addToFavoriteAndUpdate = (songId) => {
    return {
        type: actionTypes.ADD_TO_FAVORITE_AND_UPDATE, 
        songId: songId
    }
};

export const removeFavorite = (songId) => {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        songId: songId
    }
};

export const removeFavoriteAndUpdate = (songId) => {
   return {
       type: actionTypes.REMOVE_FAVORITE_AND_UPDATE, 
       songId: songId
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