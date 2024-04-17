import * as actionTypes from './constants'

export const addNumAction = (data) => {
    return {
        type:actionTypes.ADD_NUM,
        num:data
    }
}
export const subNumAction = (data) => {
    return {
        type:actionTypes.SUB_NUM,
        num:data
    }
}