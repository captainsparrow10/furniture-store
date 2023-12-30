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

export const deleteCartProducts = async (id:number) => {
	try {
		await axios.delete(process.env.NEXT_PUBLIC_URL + '/api/cart/'+id)
		return;
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}
