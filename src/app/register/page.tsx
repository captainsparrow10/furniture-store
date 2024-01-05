
import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import RegisterForm from '@/components/pages/account/RegisterForm'
import React from 'react'

export default function Registerpage() {
	return (
		<main>
			<Indications />
			<RegisterForm />
			<Sponsor />
		</main>
	)
}
