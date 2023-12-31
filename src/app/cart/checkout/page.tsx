import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import CheckOutComponent from '@/UI/Pages/CheckOut/CheckOutComponent'
import React from 'react'

export default function page() {
	return (
		<main>
			<Indications />
			<CheckOutComponent />
			<Sponsor />
		</main>
	)
}
