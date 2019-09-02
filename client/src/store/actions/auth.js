import * as actionTypes from './actionTypes';

export const authSetToken = (token) => {
    return {
        type: actionTypes.AUTH_SET_TOKEN,
        token: token
    }
};