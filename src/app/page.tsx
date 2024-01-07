import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'
import Service from '@/lib/service'
import { authOptions } from '@/lib/Auth'
import { getServerSession } from 'next-auth'

export default async function page() {
	const home: any = await Service.shop.getPresentation()
	const session = await getServerSession(authOptions)
	console.log(session)
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
