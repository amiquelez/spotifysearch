import * as actionTypes from './actionTypes';

export const fetchArtistInfo = (id) => {
    return {
        type: actionTypes.FETCH_ARTIST_INFO,
        id: id
    }
};

export const fetchArtistInfoStart = (id) => {
    return {
        type: actionTypes.FETCH_ARTIST_INFO_START,
        id: id
    }
};

export const fetchArtistInfoSuccess = (artistData) => {
    return {
        type: actionTypes.FETCH_ARTIST_INFO_SUCCESS,
        data: artistData
    }
};

export const fetchArtistInfoFail = (error) => {
    return {
        type: actionTypes.FETCH_ARTIST_INFO_FAIL,
        error: error
    }
};

export const fetchArtistAlbums = (id) => {
    return {
        type: actionTypes.FETCH_ARTIST_ALBUMS,
        id: id
    }
};

export const fetchArtistAlbumsStart = () => {
    return {
        type: actionTypes.FETCH_ARTIST_ALBUMS_START
    }
};

export const fetchArtistAlbumsSuccess = (albums) => {
    return {
        type: actionTypes.FETCH_ARTIST_ALBUMS_SUCCESS,
        albums: albums
    }
};

export const fetchArtistAlbumsFail = (error) => {
    return {
        type: actionTypes.FETCH_ARTIST_ALBUMS_FAIL,
        error: error
    }
};