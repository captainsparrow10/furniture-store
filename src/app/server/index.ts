import axios from 'axios'

export const products = async () => {
	try {
		const response = await axios.get(process.env.NEXT_URL + '/api/shop')
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const presentationItems = async () => {
	try {
		const response = await axios.get(process.env.NEXT_URL + '/api/home')
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const sponsorItems = async () => {
	try {
		const response = await axios.get(process.env.NEXT_URL + '/api/sponsor')
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const singleProduct = async (id: any) => {
	try {
		const response = await axios.get(process.env.NEXT_URL + '/api/shop/' + id)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}
