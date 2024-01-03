import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import ContentShop from '@/components/pages/shop/ContentShop'
import { ShopItemSelectedInterface } from '@/lib/Interfaces/ShopInterface'
import { products } from '@/lib/server/ShopServer'

export default async function ShopPage() {
	const shop: ShopItemSelectedInterface = await products()
	return (
		<main className="relative">
			<Indications />
			<ContentShop shopItems={shop} />
			<Sponsor />
		</main>
	)
}
