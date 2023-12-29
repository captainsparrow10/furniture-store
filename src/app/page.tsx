import { HomeInterface } from '@/utils/Interfaces'
import Banner from '@pages/Home/Banner'
import NewPick from '@pages/Home/NewPick'
import Picks from '@pages/Home/Picks'
import TopPicks from '@pages/Home/TopPicks'
import { presentationItems } from './server'

export default async function page() {
	const home: HomeInterface = await presentationItems()
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
