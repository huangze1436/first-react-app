
import * as actionTypes  from './constants'
const initialState = {
    counter:100
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_NUM:
            return {
                ...state,
                counter: state.counter 
                + action.num
            }
        case actionTypes.SUB_NUM:
            return {
                ...state,
                counter: state.counter - action.num
            }
        default:
            return state
    }
}

export default reducer