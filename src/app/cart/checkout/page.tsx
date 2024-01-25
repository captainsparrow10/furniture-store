import Sponsor from '@/components/sponsor'
import Indications from '@/components/navegation/Indications'
import CheckOutComponent from '@/containers/cart/checkout'
import React from 'react'

export default async function CheckOutpage() {
	return (
		<main>
			<Indications />
			<CheckOutComponent />
			<Sponsor />
		</main>
	)
}
