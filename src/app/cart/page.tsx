import { getServerSession } from 'next-auth'
import Indications from '@/components/navegation/Indications'
import CartComponent from '@/components/pages/cart/CartComponent'
import Sponsor from '@/components/Sponsor'
import { authOptions } from '@/lib/auth'

export default async function Cartpage() {

	return (
		<main>
			<Indications />
			<CartComponent  />
			<Sponsor />
		</main>
	)
}
