import { CartInterface } from '../Interfaces/CartInterface'
import Services from '../services/Services'

async function totalPriceFunction() {
	const cartItems = await Services.cart.get()
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

const handleAmount = async (params: {
	amount: number
	type: number
	productId: string
}) => {
	const { amount, type, productId } = params
	if (type == 1) {
		if (99 >= amount) {
			await Services.cart.update(productId, amount + 1)
			return
		}
	} else if (type == 2) {
		if (amount > 1) {
			await Services.cart.update(productId, amount - 1)
			return
		}
	}
}

export { totalPriceFunction, handleAmount }
