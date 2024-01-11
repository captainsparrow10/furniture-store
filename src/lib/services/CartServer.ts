import axios from 'axios'
import { CartInterface } from '../Interfaces/CartInterface'
import { getServerSession } from 'next-auth'
import { authOptions } from './Auth'

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
const url = process.env.NEXT_URL + '/api/cart'

// cart/get
const cartProductsUserId = async () => {
	const session = await getServerSession(authOptions)
	const token = session?.user.id
	return await axios
		.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
			},
		})
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
			'/api/cart',
			{
				...product,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((response) => response.status)
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
	const response = await axios
		.delete('/api/cart', {
			params,
		})
		.then((response) => response.status)
		.catch((error) => {
			console.log(error.response.status)
		})
	return response
}

// cart/update
 const updateCartProducts = async (productId: string, amount: number) => {
	const params = {
		productId,
		amount,
	}
	const response = await axios
		.put('/api/cart', {
			params,
		})
		.then((response) => response.status)
		.catch((error) => {
			console.log(error.response.status)
		})
	return response
}

export default CartService
