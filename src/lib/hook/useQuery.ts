import { useQuery } from '@tanstack/react-query'
import { CartInterface } from '../Interfaces/CartInterface'
import Services from '../services/Services'
import { totalPriceFunction } from '../functions'
import { UserInterface } from '../Interfaces/ProfileInterface'

const useCart = () => {
	return useQuery({
		queryKey: ['cart'],
		queryFn: async () => {
			const data: CartInterface[] = await Services.cart.get()
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
		queryFn: async () => {
			const data: UserInterface = await Services.user.get()
			return data
		},
	})
}

export { useCart, usePriceCart, useUserCart }
