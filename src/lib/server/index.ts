import axios from 'axios'

export const presentationItems = async () => {
	try {
		const response = await axios.get('http://localhost:3000/api/home')
		return response.data
	} catch (error) {
		throw error
	}
}

export const sponsorItems = async () => {
	try {
		const response = await axios.get(
			'http://localhost:3000/api/sponsor'
		)
		return response.data
	} catch (error) {
		throw error
	}
}
