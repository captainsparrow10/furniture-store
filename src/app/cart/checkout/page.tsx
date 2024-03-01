import Sponsor from '@/components/sponsor'
import Indications from '@/components/navegation/Indications'
import CheckOutComponent from '@/containers/cart/checkout'
import React from 'react'
import CartService from '@/services/cart'
import { ProfileType } from '@/types/user'
import ProfileService from '@/services/user/profile'
import { CartType } from '@/types/cart'

export default async function CheckOutPage() {
	const userProfile: ProfileType = await ProfileService.getProfile()
	const userCart: CartType[]  = await CartService.cartProductsUserId()
	return (
		<main>
			<Indications />
			<CheckOutComponent userCart={userCart} userProfile={userProfile} />
			<Sponsor />
		</main>
	)
}
