import Sponsor from '@/components/sponsor'
import ContactComponent from '@/containers/contact/form'
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
