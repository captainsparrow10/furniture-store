import { useMutation, useQueryClient } from '@tanstack/react-query'
import Services from '../services/Services'
import { handleAmount } from '../functions'
import { useRouter } from 'next/navigation'
import { AccountInterface } from '../Interfaces/ProfileInterface'

const useDeleteItemCart = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (productId: string) =>
			await Services.cart.delete(productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
			queryClient.invalidateQueries({ queryKey: ['price'] })
		},
	})
}

const useUpdateItemCart = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (params: {
			amount: number
			type: number
			productId: string
		}) => handleAmount(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
			queryClient.invalidateQueries({ queryKey: ['price'] })
		},
	})
}

const useUpdateUserAdress = () => {
  const router = useRouter()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (data: {
			companyName?: string
			country: string
			street: string
			province: string
			zipCode: string
			phone: string
		}) => await Services.user.insert(data),
		onSuccess: async() => {
      router.push('/cart/checkout/send')
			await Services.user.deleteCart()
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

const useUpdateUserprofile = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (data: AccountInterface) => await Services.user.updateProfile(data),
		onSuccess: async() => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

export { useDeleteItemCart, useUpdateItemCart, useUpdateUserAdress, useUpdateUserprofile }
