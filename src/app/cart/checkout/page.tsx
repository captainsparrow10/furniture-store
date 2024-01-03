import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import CheckOutComponent from '@/components/pages/checkout/CheckOutComponent'
import { sessionInterface } from '@/lib/Interfaces/SessionInterface'
import {
	adressCardProductUser,
	profileCardProductUser,
} from '@/lib/server/UserServer'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {
	const session: sessionInterface | null = await getServerSession(authOptions)
	if (session) {
		const user = await profileCardProductUser(session.user.email)
		const userAdress = await adressCardProductUser(user.id)
		return (
			<main>
				<Indications />
				<CheckOutComponent user={user} userAdress={userAdress} />
				<Sponsor />
			</main>
		)
	} else {
		redirect('/login')
	}
}
