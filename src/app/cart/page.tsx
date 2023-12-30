import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import React from 'react'
import CartComponent from '@/UI/Pages/Cart/CartComponent'
import { CartInterface } from '@/utils/Interfaces'
import { cartProducts } from '../server'

export default async function page() {
	const cartItems: CartInterface[] = await cartProducts()
	return (
		<main>
			<Indications />
			<CartComponent cartItems={cartItems} />
			<Sponsor />
		</main>
	)
}
