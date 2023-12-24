import { BannerType, PicksType } from '@/utils/Types'
import Banner from '@pages/Home/Banner'
import NewPick from '@pages/Home/NewPick'
import Picks from '@pages/Home/Picks'
import TopPicks from '@pages/Home/TopPicks'

export default async function page() {
	const data1 = await fetch('http://localhost:3000/api/banner')
	const data2 = await fetch('http://localhost:3000/api/picks')
	const data3 = await fetch('http://localhost:3000/api/toppicks')
	const data4 = await fetch('http://localhost:3000/api/news')
	const banner: BannerType = await data1.json()
	const picks: PicksType[] = await data2.json()
	const tops: PicksType[] = await data3.json()
	const news: any = await data4.json()

	return (
		<main className="relative">
			<Banner product={banner} />
			<Picks products={picks} />
			<TopPicks products={tops} />
			<NewPick product={news} />
		</main>
	)
}
