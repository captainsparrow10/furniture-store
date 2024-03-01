import Indications from '@/components/navegation/Indications'
import Sponsor from '@/components/sponsor'
import CartComponent from '@/containers/cart/cartcomponent'
import CartService from '@/services/cart'
import { CartType } from '@/types/cart'


export default async function CartPage() {
	const userCart: CartType[]  = await CartService.cartProductsUserId()
	return (
		<main>
			<Indications />
			<CartComponent userCart={userCart}/>
			<Sponsor />
		</main>
	)
}
