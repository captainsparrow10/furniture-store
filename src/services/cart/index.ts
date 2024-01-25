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
	deleteCartProductId: async (producId: string) => {
		return await deleteCartProductId(producId)
	},
}

// cart/get
const cartProductsUserId = async () => {
	return await apiUrl
		.get(apiRoute.cart)
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
	return await apiUrl
		.post(
			apiRoute.cart,
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
	const params = {
		productid,
	}
	return await apiUrl
		.delete(apiRoute.cart, {
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

// cart/update
const updateAmountCartProduct = async (productid: string, amount: number) => {
	const params = {
		productid,
		amount,
	}
	return await apiUrl
		.put(apiRoute.cart, {
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

export default CartService
