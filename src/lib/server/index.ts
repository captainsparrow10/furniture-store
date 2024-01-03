import axios from 'axios'

export const presentationItems = async () => {
	try {
		const response = await axios.get(process.env.NEXT_PUBLIC_URL + '/api/home')
		return response.data
	} catch (error) {
		throw error
	}
}

export const sponsorItems = async () => {
	try {
		const response = await axios.get(
			process.env.NEXT_PUBLIC_URL + '/api/sponsor'
		)
		return response.data
	} catch (error) {
		throw error
	}
}
