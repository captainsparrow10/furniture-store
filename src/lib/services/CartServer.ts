import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'

const CartService = {
	get: async () => {
		return await cartProductsUserId()
	},
	post: async (product: CartInterface) => {
		return await insertCartProduct(product)
	},
	update: async (productId: string, amount: number) => {
		return await updateCartProducts(productId, amount)
	},
	delete: async (producId: string) => {
		return await deleteCartProducts(producId)
	},
}

// cart/post
export const insertCartProduct = async (product: CartInterface) => {
	return await axios
		.post(
			'/api/cart',
			{
				...product,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => response.status)
		.catch((error) => {
			if (error.response.status == 404) {
				return error.response.status
			}
			console.log(error.response.status)
		})
}

// cart/get
export const cartProductsUserId = async () => {
	return await axios
		.get('/api/cart')
		.then((response) => response.data)
		.catch((error) => {
			console.log(error.response.status)
		})
}

// cart/delete
export const deleteCartProducts = async (productId: string) => {
	const params = {
		productId,
	}
	const response = await axios
		.delete('/api/cart', {
			params,
		})
		.then((response) => response.status)
		.catch((error) => {
			console.log(error.response.status)
		})
	return response
}

// cart/update
export const updateCartProducts = async (productId: string, amount: number) => {
	const params = {
		productId,
		amount,
	}
	const response = await axios
		.put('/api/cart', {
			params,
		})
		.then((response) => response.status)
		.catch((error) => {
			console.log(error.response.status)
		})
	return response
}

export default CartService
