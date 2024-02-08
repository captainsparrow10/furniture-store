import { getSession } from '@/lib/api'
import { CartType } from '@/types/cart'
import { apiRoute, apiUrl } from '@services/api'

const CartService = {
	cartProductsUserId: async () => {
		return await cartProductsUserId()
	},
	insertCartProduct: async (product: CartType) => {
		return await insertCartProduct(product)
	},
	updateAmountCartProduct: async (productid: string, amount: number) => {
		return await updateAmountCartProduct(productid, amount)
	},
	deleteCartProductId: async (productid: string) => {
		return await deleteCartProductId(productid)
	},
}

// cart/get
const cartProductsUserId = async () => {
	const token = await getSession()
	return apiUrl
		.get(apiRoute.cart, {
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

// cart/post
const insertCartProduct = async (product: CartType) => {
	const token = await getSession()
	return apiUrl
		.post(
			apiRoute.cart,
			{
				...product,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
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

// cart/delete
const deleteCartProductId = async (productid: string) => {
	const token = await getSession()
	const params = {
		productid,
	}
	return apiUrl
		.delete(apiRoute.cart, {
			params,
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

// cart/update
const updateAmountCartProduct = async (productid: string, amount: number) => {
	const token = await getSession()
	const params = {
		productid,
		amount,
	}
	return apiUrl
		.put(
			apiRoute.cart,
			{
				params,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
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

export default CartService
