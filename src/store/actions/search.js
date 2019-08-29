import * as actionTypes from './actionTypes';

export const fetchArtists = (value) => {
    return {
        type: actionTypes.FETCH_ARTISTS,
        value
    }
};

export const fetchArtistsStart = () => {
    return {
        type: actionTypes.FETCH_ARTISTS_START
    }
};

export const fetchArtistsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ARTISTS_SUCCESS,
        data
    }
};

export const fetchArtistsFail = (error) => {
    return {
        type: actionTypes.FETCH_ARTISTS_FAIL,
        error
    }
};