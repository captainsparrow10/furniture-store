import axios from 'axios'
import {
	AdressInterface,
	ProfileInterface,
} from '../Interfaces/ProfileInterface'
import { getServerSession } from 'next-auth'
import { authOptions } from './Auth'

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

// auth/profile
const getUser = async () => {
	const session = await getServerSession(authOptions)
	console.log('session', session)
	await axios
		.get('/api/auth/profile', {
			headers: {
				Authorization: session?.user.id,
			},
		})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => console.log('error'))
}

// auth/profile
const insertAdress = async (userData: AdressInterface) => {
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

// auth/profile
const deleteUserCart = async () => {
	const response = await axios
		.delete('/api/auth/profile')
		.then((response) => response.status)
		.catch((error) => {
			console.log(error.response.status)
		})
	return response
}

export default UserService
