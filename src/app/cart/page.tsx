import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import React from 'react'
import CartComponent from '@/UI/Pages/Cart/CartComponent'


export default async function page() {
	return (
		<main>
			<Indications />
			<CartComponent  />
			<Sponsor />
		</main>
	)
}
