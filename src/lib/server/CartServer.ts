import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'



const CartService = {
	get: async () => {
		return await cartProductsUserId()
	},
	post: async (product: CartInterface) => {
		return await insertCartProduct(product)
	},
	update: async (producId: string, amount: number) => {
		return await updateCartProducts(producId, amount)
	},
	delete: async (producId: string) => {
		return await deleteCartProducts(producId)
	},
}

// cart/post
export const insertCartProduct = async (product: CartInterface) => {
	try {
		const response = await axios.post(
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
		return response.status
	} catch (error) {
		throw error
	}
}

// cart/get
export const cartProductsUserId = async () => {
	try {
		const response = await axios.get('/api/cart')
		return response.data
	} catch (error) {
		throw error
	}
}

// cart/delete
export const deleteCartProducts = async (productId: string) => {
	const params = {
		productId,
	}
	try {
		await axios.delete('/api/cart', {
			params,
		})
		return
	} catch (error) {
		throw error
	}
}

// cart/update
export const updateCartProducts = async (producId: string, amount: number) => {
	const params = {
		amount,
		producId,
	}
	try {
		await axios.put('/api/cart', {
			params,
		})
		return
	} catch (error) {
		throw error
	}
}

export default CartService