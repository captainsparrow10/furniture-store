import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'
import Services from '@/lib/services'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/services/Auth'
import axios from 'axios'

export default async function page() {
	const url = process.env.NEXT_URL + '/api/cart'
	const home: any = await Services.shop.getPresentation()
	const cartProductsUserId = async () => {
		const session = await getServerSession(authOptions)
		const token = session?.user.id
		return await axios
			.get(url, {
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: 'application/json',
				},
			})
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.log(error.response.status)
			})
	}
	const data = await cartProductsUserId()
	console.log(data)
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
