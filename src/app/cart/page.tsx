import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import React from 'react'
import CartComponent from '@/UI/Pages/Cart/CartComponent'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { sessionInterface } from '@/utils/Interfaces'
import { redirect } from 'next/navigation'

export default async function page() {
	const session: sessionInterface | null = await getServerSession(authOptions)
	if (session) {
		return (
			<main>
				<Indications />
				<CartComponent userId={session.user.id} />
				<Sponsor />
			</main>
		)
	} else {
		redirect('/account')
	}
}
