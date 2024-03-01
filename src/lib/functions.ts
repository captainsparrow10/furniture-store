import CartService from '@services/cart'

async function totalPriceFunction() {
	const cartItems = await CartService.cartProductsUserId()
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
	productid: string
}) => {
	const { amount, type, productid } = params
	if (type == 1) {
		if (99 >= amount) {
			return await CartService.updateAmountCartProduct(productid, amount + 1)
		}
	} else if (type == 2) {
		if (amount > 1) {
			return await CartService.updateAmountCartProduct(productid, amount - 1)
		}
	}
}

export { totalPriceFunction, handleAmount }
