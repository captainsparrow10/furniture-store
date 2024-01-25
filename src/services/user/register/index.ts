import { RegisterType } from '@/types/user'
import { apiRoute, apiUrl } from '@services/api'

const RegisterService = {
	createUser: async (userData: RegisterType) => {
		return await createUser(userData)
	},
	changePassword: async (email: string, password: string) => {
		return await changePassword(email, password)
	},
}

const createUser = async (userData: RegisterType) => {
	return await apiUrl
		.post(
			apiRoute.register,
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
			return response.data
		})
		.catch((error) => {
			return {
				title: error.response.statusText,
				status: error.response.status,
			}
		})
}

const changePassword = async (email: string, password: string) => {
	const params = {
		email,
		password,
	}
	return await apiUrl
		.put(apiRoute.register, {
			params,
		})
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			return {
				title: error.response.statusText,
				status: error.response.status,
			}
		})
}

export default RegisterService
