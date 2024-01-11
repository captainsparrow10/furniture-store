import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import CheckOutComponent from '@/components/pages/checkout/CheckOutComponent'
import { CartInterface } from '@/lib/Interfaces/CartInterface'
import { UserInterface } from '@/lib/Interfaces/ProfileInterface'
import { totalPriceFunction } from '@/lib/functions'
import Services from '@/lib/services'
import React from 'react'

export default async function CheckOutpage() {
	const cart: CartInterface[] = await Services.cart.get()
	const user: UserInterface = await Services.user.get()
	let totalPrice = 0
	if (cart) {
	totalPrice = totalPriceFunction(cart)
	}
	return (
		<main>
			<Indications />
			<CheckOutComponent user={user} cart={cart} totalPrice={totalPrice} />
			<Sponsor />
		</main>
	)
}
