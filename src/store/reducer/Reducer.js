import { ActionTypes } from '../constant/constants';
const INITIAL_STATE = {
    // userName:"Moiz"
    list: ["Moiz"]
}


export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ARRAYLIST:
            return state = {
                list: action.payload,
            };

        // case "DECREMENT":
        //     return states - 1;

        default:
            return state
    }
}
// export default Reducer;