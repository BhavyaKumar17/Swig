import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/cartActions';

export default function cartReducer(state={}, action){
    switch(action.type){
        case ADD_ITEM_TO_CART: {
            const itemName = action.payload.itemName
            const newState = {
                ...state,
                [itemName]: (state[itemName] || 0) + 1
            }
            return newState
        }
        case REMOVE_ITEM_FROM_CART: {
            const itemName = action.payload.itemName
            const newState = {
                ...state,
                [itemName]: state[itemName] - 1
            }
            return newState
        }
        default: 
        return state
    }
}






//connect - accumulator, iterator

// export default cartReducer(state={}, action){
//     switch(action.type){
//         case ADD_ITEM_TO_CART: {
//             const itemName = action.payload.itemName
//             const newState = {
//                 ...state,
//                 [itemName]: (state[itemName] || 0) + 1
//             }
//             return newState
//         }
//         case REMOVE_ITEM_FROM_CART: {

//             return state
//         }
//         default: 
//         return state
//     }
// }
