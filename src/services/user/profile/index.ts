import { AddressType, ProfileType } from '@/types/user'
import { apiUrl, apiRoute } from '@/services/api'
import { getSession } from '@/lib/util/api'

const ProfileService = {
	getProfile: async () => {
		return await getProfile()
	},
	createAdress: async (userData: AddressType) => {
		return await createAddress(userData)
	},
	putProfile: async (userData: ProfileType) => {
		return await putProfile(userData)
	},
	deleteCart: async () => {
		return await deleteCart()
	},
}
const getProfile = async () => {
	const token = await getSession()
	return apiUrl
		.get(apiRoute.profile, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
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

const createAddress = async (userData: AddressType) => {
	return await apiUrl
		.post(
			apiRoute.profile,
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

const putProfile = async (userData: ProfileType) => {
	const params = {
		userData,
	}
	return await apiUrl
		.put(apiRoute.profile, {
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

const deleteCart = async () => {
	return await apiUrl
		.delete(apiRoute.profile)
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

export default ProfileService
