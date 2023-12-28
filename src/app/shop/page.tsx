import { ShopItemSelectedInterface } from '@/utils/Interfaces'
import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import ContentShop from '@/UI/Pages/Shop/ContentShop'

export default async function ShopPage() {
	const res = await fetch('http://localhost:3000/api/shop')
	const shopItems: ShopItemSelectedInterface = await res.json()

	return (
		<main className="relative">
			<Indications />
			<ContentShop shopItems={shopItems}  />
			<Sponsor />
		</main>
	)
}
