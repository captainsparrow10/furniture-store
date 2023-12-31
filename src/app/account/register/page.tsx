import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import RegisterForm from '@/UI/Pages/Account/RegisterForm'
import React from 'react'

export default function page() {
	return (
		<main>
			<Indications />
			<RegisterForm />
			<Sponsor />
		</main>
	)
}
