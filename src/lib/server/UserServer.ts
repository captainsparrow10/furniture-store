import axios from 'axios'

export const profileCardProductUser = async (email: string) => {
	const params = {
		email,
	}
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/profile/',
			{ params }
		)
		return response.data
	} catch (error) {
		throw error 
	}
}

export const adressCardProductUser = async (id: number) => {
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/profile/' + id
		)
		return response.data
	} catch (error) {
		throw error
	}
}

export const deleteProfileUserProducts = async (id: number) => {
	try {
		await axios.delete(process.env.NEXT_PUBLIC_URL + '/api/profile/' + id)
		return
	} catch (error) {
		throw error
	}
}
