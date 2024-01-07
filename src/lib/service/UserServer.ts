import axios from 'axios'
import { ProfileInterface } from '../Interfaces/ProfileInterface'

const UserService = {
	Adress: {
		get: async () => {
			return await getAddressUser()
		},
		insert: async (userAdress: ProfileInterface) => {
			return await insertUserAdress(userAdress)
		},
	},
	Profile: {
		insert: async (userData: ProfileInterface) => {
			return await insertUser(userData)
		},
		deleteCart: async () => {
			return deleteUserCart()
		},
	},
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

// auth/adress
const getAddressUser = async () => {
	try {
		const response = await axios.get('/api/auth/adress')
		return response.data
	} catch (error) {
		throw error
	}
}

// auth/profile
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

// auth/profile
const deleteUserCart = async () => {
	try {
		await axios.delete('api/auth/profile')
	} catch (error) {
		throw error
	}
}

export default UserService
