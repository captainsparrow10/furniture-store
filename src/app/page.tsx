import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'
import { UserInterface } from '@/lib/Interfaces/ProfileInterface'
import { CartInterface } from '@/lib/Interfaces/CartInterface'
import Services from '@/lib/services'
import { authOptions } from '@/lib/services/Auth'
import { getServerSession } from 'next-auth'

export default async function page() {
	const home: any = await Services.shop.getPresentation()
	const session = await getServerSession(authOptions)
	// console.log(session)
	const user = await Services.user.get()
	// console.log(user)
	// console.log("user")
	const cart = await Services.cart.get()
	// console.log(cart)
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
