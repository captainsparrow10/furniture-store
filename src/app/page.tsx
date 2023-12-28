import { HomeInterface } from '@/utils/Interfaces'
import Banner from '@pages/Home/Banner'
import NewPick from '@pages/Home/NewPick'
import Picks from '@pages/Home/Picks'
import TopPicks from '@pages/Home/TopPicks'

export default async function page() {
	const data = await fetch('http://localhost:3000/api/home')
	const home: HomeInterface = await data.json()
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
