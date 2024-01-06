import axios from 'axios'
import { BaseURL } from '../var'

export const profileCardProductUser = async (email: string) => {
	const params = {
		email,
	}
	try {
		const response = await axios.get(BaseURL() + '/api/profile/', { params })
		return response.data
	} catch (error) {
		throw error
	}
}

export const adressCardProductUser = async (id: number) => {
	try {
		const response = await axios.get(BaseURL() + '/api/profile/' + id)
		return response.data
	} catch (error) {
		throw error
	}
}

export const deleteProfileUserProducts = async (id: number) => {
	try {
		await axios.delete(BaseURL() + '/api/profile/' + id)
		return
	} catch (error) {
		throw error
	}
}
