import axios from 'axios'
import { ProfileInterface } from '../Interfaces/ProfileInterface'

// profile/get
const getUser = async (email: string) => {
	const params = {
		email,
	}
	const response = await axios
		.get('/api/profile/', { params })
		.then((response) => response.data)
		.catch((error) => {
			return error.message
		})
	return response
}

// auth/register
const insertUser = async (userData: ProfileInterface) => {
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
const getAddressUser = async (userId: string) => {
	try {
		const response = await axios.get('/api/profile/' + userId)
		return response.data
	} catch (error) {
		throw error
	}
}

// profile/post ->  userAdress
const insertUserAdress = async (userData: ProfileInterface) => {
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
const deleteUserCart = async (userId: string) => {
	try {
		await axios.delete('/api/profile/' + userId)
	} catch (error) {
		throw error
	}
}

export { getAddressUser, getUser, insertUserAdress, insertUser, deleteUserCart }
