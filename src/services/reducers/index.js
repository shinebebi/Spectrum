import {combineReducers} from "redux";

const initialState = {
    elemImg: '',
    elem: ''
}
export const ELEM_ClICK = 'ELEM_ClICK'
export const SPECTRUM_CLICK = 'SPECTRUM_CLICK'

export const spectrumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ELEM_ClICK: {
            return {
                ...state,
                elemImg: action.image
            }
        }
        case SPECTRUM_CLICK: {
            return {
                ...state,
                elem: action.name
            }
        }
        default: {
            return state
        }
    }
}

export const rootReducer = combineReducers({
    spectrum: spectrumReducer
})