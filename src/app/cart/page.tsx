import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import React from 'react'
import CartComponent from '@/UI/Pages/Cart/CartComponent'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { sessionInterface } from '@/utils/Interfaces'

export default async function page() {
	const session: sessionInterface | null = await getServerSession(authOptions)

	return (
		<main>
			<Indications />
			{session && <CartComponent userId={session.user.id} />}
			<Sponsor />
		</main>
	)
}
