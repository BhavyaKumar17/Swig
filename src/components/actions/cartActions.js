export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

//2 action creators
export const addItemToCart = (itemName, price) => {
	return{
		type: ADD_ITEM_TO_CART,
		payload: {
			itemName: itemName,
            price: price
		}
	}
}

export const removeItemFromCart = (itemName) => {
	return{
		type: REMOVE_ITEM_FROM_CART,
		payload: {
			itemName: itemName
		}
	}
}