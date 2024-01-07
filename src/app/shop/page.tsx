import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import ContentShop from '@/components/pages/shop/ContentShop'
import { ShopItemSelectedInterface } from '@/lib/Interfaces/ShopInterface'
import ShopService, { products } from '@/lib/server/ShopServer'

export default async function ShopPage() {
	const shopItems: ShopItemSelectedInterface = await ShopService.getProducts()
	return (
		<main className="relative">
			<Indications />
			<ContentShop shopItems={shopItems} />
			<Sponsor />
		</main>
	)
}
