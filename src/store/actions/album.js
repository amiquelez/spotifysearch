import * as actionTypes from './actionTypes';

export const fetchAlbumInfo = (id) => {
    return {
        type: actionTypes.FETCH_ALBUM_INFO,
        id: id
    }
};

export const fetchAlbumInfoStart = (id) => {
    return {
        type: actionTypes.FETCH_ALBUM_INFO_START,
        id: id
    }
};

export const fetchAlbumInfoSuccess = (albumData) => {
    return {
        type: actionTypes.FETCH_ALBUM_INFO_SUCCESS,
        data: albumData
    }
};

export const fetchAlbumInfoFail = (error) => {
    return {
        type: actionTypes.FETCH_ALBUM_INFO_FAIL,
        error: error
    }
};

export const fetchAlbumTracks = (id) => {
    return {
        type: actionTypes.FETCH_ALBUM_TRACKS,
        id: id
    }
};

export const fetchAlbumTracksStart = (id) => {
    return {
        type: actionTypes.FETCH_ALBUM_TRACKS_START,
        id: id
    }
};

export const fetchAlbumTracksSuccess = (tracks) => {
    return {
        type: actionTypes.FETCH_ALBUM_TRACKS_SUCCESS,
        data: tracks
    }
};

export const fetchAlbumTracksFail = (error) => {
    return {
        type: actionTypes.FETCH_ALBUM_TRACKS_FAIL,
        error: error
    }
};