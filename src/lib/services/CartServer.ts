import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'

const CartService = {
	get: async () => {
		return await cartProductsUserId()
	},
	post: async (product: CartInterface) => {
		return await insertCartProduct(product)
	},
	update: async (productId: string, amount: number) => {
		return await updateCartProducts(productId, amount)
	},
	delete: async (producId: string) => {
		return await deleteCartProducts(producId)
	},
}


const url = process.env.NEXT_PUBLIC_URL + '/api/cart'

// cart/get
const cartProductsUserId = async () => {
	return await axios
		.get(url)
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			console.log(error.response.status)
		})
}

// cart/post
const insertCartProduct = async (product: CartInterface) => {
	return await axios
		.post(
			url,
			{
				...product,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => {
			return response.status
		})
		.catch((error) => {
			if (error.response.status == 404) {
				return error.response.status
			}
			console.log(error.response.status)
		})
}

// cart/delete
const deleteCartProducts = async (productId: string) => {
	const params = {
		productId,
	}
	return await axios
		.delete('/api/cart', {
			params,
		})
		.then((response) => {
			return response.status
		})
		.catch((error) => {
			console.log(error.response.status)
		})
}

// cart/update
const updateCartProducts = async (productId: string, amount: number) => {
	const params = {
		productId,
		amount,
	}
	return  await axios
		.put('/api/cart', {
			params,
		})
		.then((response) => {
			return response.status
		})
		.catch((error) => {
			console.log(error.response.status)
		})

}

export default CartService
