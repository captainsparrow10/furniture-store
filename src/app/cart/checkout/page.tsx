import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import CheckOutComponent from '@/UI/Pages/CheckOut/CheckOutComponent'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { adressCardProductUser, profileCardProductUser } from '@/app/server'
import { sessionInterface } from '@/utils/Interfaces'
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
		redirect('/account')
	}
}
