import axios from 'axios'
import { BaseURL } from '../var'
import { ProfileInterface } from '../Interfaces/ProfileInterface'

// profile/get
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

// auth/register
export const insertUser = async (userData: ProfileInterface) => {
	try {
		const response = await axios.post(
			'/api/auth/register',
			{
				...userData,
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

// profile/userId/get -> adresss
export const getAddressUser = async (userId: string) => {
	try {
		const response = await axios.get(BaseURL() + '/api/profile/' + userId)
		return response.data
	} catch (error) {
		throw error
	}
}

// profile/userId/post -> adress
export const insertAdressUser = async (userData: ProfileInterface) => {
	try {
		const response = await axios.post(
			'/api/profile',
			{
				...userData,
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

// profile/userId/delete -> cartProducts
export const deleteCartUser = async (userId: string) => {
	try {
		await axios.delete(BaseURL() + '/api/profile/' + userId)
	} catch (error) {
		throw error
	}
}
