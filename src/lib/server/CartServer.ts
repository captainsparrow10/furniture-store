import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'

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
		const response = await axios.get('http://localhost:3000/api/cart')
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
		await axios.delete('http://localhost:3000/api/cart/' + id_product, {
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
		await axios.put('http://localhost:3000/api/cart/' + id_product, {
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
		const response = await axios.get('http://localhost:3000/api/cart/', {
			params,
		})
		return response.data
	} catch (error) {
		throw error
	}
}
