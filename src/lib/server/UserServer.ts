import axios from 'axios'

export const profileCardProductUser = async (email: string) => {
	const params = {
		email,
	}
	try {
		const response = await axios.get(
			'http://localhost:3000/api/profile/',
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
			'http://localhost:3000/api/profile/' + id
		)
		return response.data
	} catch (error) {
		throw error
	}
}

export const deleteProfileUserProducts = async (id: number) => {
	try {
		await axios.delete('http://localhost:3000/api/profile/' + id)
		return
	} catch (error) {
		throw error
	}
}
