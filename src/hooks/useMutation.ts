import { useMutation, useQueryClient } from '@tanstack/react-query'
import { handleAmount } from '@/lib/functions'
import CartService from '@/services/cart'
import ProfileService from '@/services/user/profile'

const useDeleteItemCart = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (productid: string) =>
			await CartService.deleteCartProductId(productid),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
			queryClient.invalidateQueries({ queryKey: ['price'] })
		},
	})
}

const useUpdateAmountItemCart = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (params: {
			amount: number
			type: number
			productid: string
		}) => handleAmount(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
			queryClient.invalidateQueries({ queryKey: ['price'] })
		},
	})
}

const useCheckOut = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async () => await ProfileService.deleteCart(),
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
			queryClient.invalidateQueries({ queryKey: ['user'] })
		},
	})
}

const useUpdateProfileData = () => {
	const queryClient = useQueryClient()
	return useMutation({
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: ['user'] })
		},
	})
}

export {
	useDeleteItemCart,
	useUpdateAmountItemCart,
	useUpdateProfileData,
	useCheckOut,
}
