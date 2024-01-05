import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { sessionInterface } from '@/lib/Interfaces/SessionInterface'
import Indications from '@/components/navegation/Indications'
import CartComponent from '@/components/pages/cart/CartComponent'
import Sponsor from '@/components/Sponsor'

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
