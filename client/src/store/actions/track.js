import * as actionTypes from './actionTypes';

export const fetchTrackInfo = (id) => {
    return {
        type: actionTypes.FETCH_TRACK_INFO,
        id: id
    }
};

export const fetchTrackInfoStart = (id) => {
    return {
        type: actionTypes.FETCH_TRACK_INFO_START,
        id: id
    }
};

export const fetchTrackInfoSuccess = (data) => {
    return {
        type: actionTypes.FETCH_TRACK_INFO_SUCCESS,
        data: data
    }
};

export const fetchTrackInfoFail = (error) => {
    return {
        type: actionTypes.FETCH_TRACK_INFO_FAIL,
        error: error
    }
};