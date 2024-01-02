import { CartInterface } from '@/utils/Interfaces'
import axios from 'axios'

export const products = async () => {
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_URL + '/api/shop')
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const presentationItems = async () => {
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_URL + '/api/home')
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const sponsorItems = async () => {
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/sponsor'
		)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const singleProduct = async (id: any) => {
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/shop/' + id
		)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

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
		const response = await axios.get(process.env.NEXT_PUBLIC_URL + '/api/cart')
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const deleteCartProducts = async (id_product: string, id: number) => {
	const params = {
		id,
	}
	try {
		await axios.delete(
			process.env.NEXT_PUBLIC_URL + '/api/cart/' + id_product,
			{ params }
		)
		return
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
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
		await axios.put(process.env.NEXT_PUBLIC_URL + '/api/cart/' + id_product, {
			params,
		})
		return
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const cartProductsUserId = async (id: number) => {
	const params = {
		id,
	}
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/cart/',
			{ params }
		)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const profileCardProductUser = async (email: string) => {
	const params = {
		email,
	}
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/profile/',
			{ params }
		)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const adressCardProductUser = async (id: number) => {
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/profile/' + id
		)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const deleteProfileUserProducts = async (id: number) => {
	try {
		await axios.delete(process.env.NEXT_PUBLIC_URL + '/api/profile/' + id)
		return
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}
