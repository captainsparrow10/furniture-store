import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import { presentationItems } from '../lib/server'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'

export default async function page() {
	const home: any = await presentationItems()

	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
