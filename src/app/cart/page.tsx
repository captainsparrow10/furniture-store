import Indications from '@/components/navegation/Indications'
import Sponsor from '@/components/sponsor'
import CartComponent from '@/containers/cart/cartcomponent'


export default async function Cartpage() {
	return (
		<main>
			<Indications />
			<CartComponent />
			<Sponsor />
		</main>
	)
}
