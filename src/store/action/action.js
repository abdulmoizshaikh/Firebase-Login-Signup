import {ActionTypes} from '../constant/constants'

export function addArrayList([abc]){
    return({
        type:ActionTypes.ARRAYLIST,
        payload:[abc]
    })
}