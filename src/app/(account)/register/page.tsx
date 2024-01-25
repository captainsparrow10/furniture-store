
import Sponsor from '@/components/sponsor'
import Indications from '@/components/navegation/Indications'
import RegisterForm from '@/containers/account/register'
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
