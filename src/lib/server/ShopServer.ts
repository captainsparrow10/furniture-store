import axios from "axios"

export const products = async () => {
	try {
		const response = await axios.get('http://localhost:3000/api/shop')
		return response.data
	} catch (error) {
		throw error
	}
}

export const singleProduct = async (id: any) => {
	try {
		const response = await axios.get(
			'http://localhost:3000/api/shop/' + id
		)
		return response.data
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}