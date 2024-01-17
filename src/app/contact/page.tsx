import Sponsor from '@/components/Sponsor'
import ContactComponent from '@/components/contact/ContactComponent'
import Indications from '@/components/navegation/Indications'
import React from 'react'

export default function Contactpage() {
	return (
		<main>
			<Indications />
			<ContactComponent />
			<Sponsor />
		</main>
	)
}
