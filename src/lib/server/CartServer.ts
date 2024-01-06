import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'
import { BaseURL } from '../var'

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
export const cartProductsUserId = async (userId: number) => {
	const params = {
		userId,
	}
	try {
		const response = await axios.get(BaseURL() + '/api/cart', {
			params,
		})
		return response.data
	} catch (error) {
		throw error
	}
}

// cart/delete
export const deleteCartProducts = async (productId: string, userId: number) => {
	const params = {
		productId,
		userId,
	}
	try {
		await axios.delete(BaseURL() + '/api/cart', {
			params,
		})
		return
	} catch (error) {
		throw error
	}
}

// cart/update
export const updateCartProducts = async (
	producId: string,
	amount: number,
	userId: number
) => {
	const params = {
		amount,
		userId,
		producId,
	}
	try {
		await axios.put(BaseURL() + '/api/cart', {
			params,
		})
		return
	} catch (error) {
		throw error
	}
}
