import Sponsor from '@/components/sponsor'
import Indications from '@/components/navegation/Indications'
import ShopService from '@/services/shop'
import { ShopItemSelectedType } from '@/types/shop'
import ContentShop from '@/containers/shop/ContentShop'

export default async function ShopPage() {
	const shopItems: ShopItemSelectedType = await ShopService.getProducts()
	return (
		<main className="relative">
			<Indications />
			<ContentShop shopItems={shopItems} />
			<Sponsor />
		</main>
	)
}
