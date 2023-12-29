import { ShopItemSelectedInterface } from '@/utils/Interfaces'
import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import ContentShop from '@/UI/Pages/Shop/ContentShop'
import { products } from '../server'

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
