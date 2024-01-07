import axios from 'axios'
import { AdressInterface, ProfileInterface } from '../Interfaces/ProfileInterface'

const UserService = {
	Adress: {
		get: async () => {
			return await getAddressUser()
		},
		insert: async (userAdress: AdressInterface) => {
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
	const response = await axios
		.post(
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
		.then((response) => response.status)
		.catch((error) => console.log(error.response.status))
	return response
}

// auth/adress
const getAddressUser = async () => {
	const response = await axios
		.get('/api/auth/adress')
		.then((response) => response.data)
		.catch((error) => console.log(error.response.status))
	return response
}

// auth/profile
const insertUserAdress = async (userAdress: AdressInterface) => {
	const response = await axios
		.post(
			'/api/auth/adress',
			{
				...userAdress,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => response.status)
		.catch((error) => console.log(error.response.status))
	return response
}

// auth/profile
const deleteUserCart = async () => {
	const response = await axios
		.delete('api/auth/profile')
		.then((response) => response.status)
		.catch((error) => {
			console.log(error.response.status)
		})
		return response
}

export default UserService
