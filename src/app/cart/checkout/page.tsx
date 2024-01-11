import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import CheckOutComponent from '@/components/pages/checkout/CheckOutComponent'
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
