import { getServerSession } from 'next-auth'

import { sessionInterface } from '@/lib/Interfaces/SessionInterface'
import Indications from '@/components/navegation/Indications'
import CartComponent from '@/components/pages/cart/CartComponent'
import Sponsor from '@/components/Sponsor'
import { authOptions } from '@/lib/server/Auth'

export default async function Cartpage() {
	const session: sessionInterface | null = await getServerSession(authOptions)

	return (
		<main>
			<Indications />
			{session && <CartComponent userId={session.user.id} />}
			<Sponsor />
		</main>
	)
}
