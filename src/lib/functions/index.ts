import { CartInterface } from '../Interfaces/CartInterface'

function totalPriceFunction(cartItems: CartInterface[]): number {
	let subPrice, totalPrice: number
	if (Array.isArray(cartItems) && cartItems.length > 0) {
		subPrice = cartItems.map((item) => item.amount * parseFloat(item.price))
		totalPrice = subPrice.reduce((total, value) => total + value, 0)
		return totalPrice
	} else if (cartItems && cartItems.length === 1) {
		totalPrice = parseFloat(cartItems[0].price)
		return totalPrice
	} else {
		return 0
	}
}

export { totalPriceFunction }
