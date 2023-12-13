import { BannerType } from '@/utils/Types'
import Banner from '@pages/Home/Banner'
import NewPick from '@pages/Home/NewPick'
import Picks from '@pages/Home/Picks'
import TopPicks from '@pages/Home/TopPicks'

export default async function page() {
	const data = await fetch('http://localhost:3000/api/banner')
	const banner: BannerType = await data.json()
	return (
		<main className="relative">
			<Banner banner={banner} />
			<Picks banner={banner} />
			<TopPicks banner={banner} />
			<NewPick banner={banner} />
		</main>
	)
}
