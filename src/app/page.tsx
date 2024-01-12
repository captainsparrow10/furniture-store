import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'
import Services from '@/lib/services/Services'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/services/Auth'

export default async function page() {
	const home: any = await Services.shop.getPresentation()
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
