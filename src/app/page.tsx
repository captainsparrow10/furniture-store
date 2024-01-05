import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import { presentationItems } from '../lib/server'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/server/Auth'

export default async function page() {
	const home: any = await presentationItems()
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
