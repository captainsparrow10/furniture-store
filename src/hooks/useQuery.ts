import { useQuery } from '@tanstack/react-query'
import { totalPriceFunction } from '@/lib/util/functions'
import { CartType } from '@/types/cart'
import { ProfileType } from '@/types/user'
import CartService from '@/services/cart'
import ProfileService from '@/services/user/profile'

const useCart = () => {
	return useQuery({
		queryKey: ['cart'],
		queryFn: async () => {
			const data: CartType[] = await CartService.cartProductsUserId()
			return data
		},
	})
}

const usePriceCart = () => {
	return useQuery({
		queryKey: ['price'],
		queryFn: async () => {
			return await totalPriceFunction()
		},
	})
}

const useUserCart = () => {
  return useQuery({
		queryKey: ['user'],
		queryFn:  async() => {
		 const data: ProfileType = await ProfileService.getProfile()
		 return data
		},
	})
}

export { useCart, usePriceCart, useUserCart }
