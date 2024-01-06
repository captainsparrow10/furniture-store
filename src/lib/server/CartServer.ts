import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'
import { BaseURL } from '../var'

export const insertCartProduct = async (product: CartInterface) => {
	try {
		await axios.post(
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
	} catch (error) {
		console.error('Error:', error)
	}
}

export const cartProducts = async () => {
	try {
		const response = await axios.get(BaseURL() + '/api/cart')
		return response.data
	} catch (error) {
		throw error
	}
}

export const deleteCartProducts = async (id_product: string, id: number) => {
	const params = {
		id,
	}
	try {
		await axios.delete(BaseURL() + '/api/cart/' + id_product, {
			params,
		})
		return
	} catch (error) {
		throw error
	}
}
export const updateCartProducts = async (
	id_product: string,
	amount: number,
	userId: number
) => {
	const params = {
		amount,
		userId,
	}
	try {
		await axios.put(BaseURL()+'/api/cart/' + id_product, {
			params,
		})
		return
	} catch (error) {
		throw error
	}
}

export const cartProductsUserId = async (id: number) => {
	const params = {
		id,
	}
	try {
		const response = await axios.get(BaseURL()+'/api/cart/', {
			params,
		})
		return response.data
	} catch (error) {
		throw error
	}
}
