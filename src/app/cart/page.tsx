import Indications from '@/components/navegation/Indications'
import CartComponent from '@/components/pages/cart/CartComponent'
import Sponsor from '@/components/Sponsor'


export default async function Cartpage() {

	return (
		<main>
			<Indications />
			<CartComponent />
			<Sponsor />
		</main>
	)
}
