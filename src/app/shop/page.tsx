import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import ContentShop from '@/components/pages/shop/ContentShop'
import { ShopItemSelectedInterface } from '@/lib/Interfaces/ShopInterface'
import Service from '@/lib/services/Services'

export default async function ShopPage() {
	const shopItems: ShopItemSelectedInterface = await Service.shop.getProducts()
	return (
		<main className="relative">
			<Indications />
			<ContentShop shopItems={shopItems} />
			<Sponsor />
		</main>
	)
}
