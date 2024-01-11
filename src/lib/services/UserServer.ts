import axios from 'axios'
import {
	AdressInterface,
	ProfileInterface,
} from '../Interfaces/ProfileInterface'

const UserService = {
	get: async () => {
		return await getUser()
	},
	register: async (userData: ProfileInterface) => {
		return await insertUser(userData)
	},
	deleteCart: async () => {
		return deleteUserCart()
	},
	insert: async (userData: AdressInterface) => {
		return await insertAdress(userData)
	},
}

const url = process.env.NEXT_PUBLIC_URL + '/api/auth/profile'

// auth/register
const insertUser = async (userData: ProfileInterface) => {
	return await axios
		.post(
			process.env.NEXT_PUBLIC_URL + '/api/auth/register',
			{
				...userData,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			return response.status
		})
		.catch((error) => console.log(error.response.status))
}

// auth/profile
const getUser = async () => {
	return await axios
		.get(url)
		.then((response) => {
			return response.data
		})
		.catch((error) => console.log(error))
}

// auth/profile
const insertAdress = async (userData: AdressInterface) => {
	return await axios
		.post(
			url,
			{
				...userData,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			return response.status
		})
		.catch((error) => console.log(error.response.status))
}

// auth/profile
const deleteUserCart = async () => {
	return await axios
		.delete(url)
		.then((response) => {
			return response.status
		})
		.catch((error) => {
			console.log(error.response.status)
		})
}

export default UserService
