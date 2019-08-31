import * as actionTypes from '../actions/actionTypes';

const initialState = {
    artists: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ARTISTS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.data, 
                loading: false
            }
        case actionTypes.FETCH_ARTISTS_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }
        case actionTypes.CLEAN_ARTISTS:
            return {
                ...state,
                artists: []
            }
        default:
            return state;
    }
};

export default reducer;