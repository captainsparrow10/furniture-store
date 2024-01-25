import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { handleAmount } from '@/lib/util/functions'
import { AddressType, ProfileType } from '@/types/user'
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

const useUpdateUserAdress = () => {
	const router = useRouter()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (data: AddressType) =>
			await ProfileService.createAdress(data),
		onSuccess: async () => {
			router.push('/cart/checkout/send')
			await ProfileService.deleteCart()
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

const useUpdateUserprofile = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (data: ProfileType) =>
			await ProfileService.putProfile(data),
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
}

const useUpdateProfileData = () =>{
	const queryClient = useQueryClient()
	return useMutation({
		onSuccess: async () => {
			queryClient.invalidateQueries({ queryKey: ['user'] })
		},
	})
}

export {
	useDeleteItemCart,
	useUpdateAmountItemCart ,
	useUpdateUserAdress,
	useUpdateUserprofile,
	useUpdateProfileData
}
