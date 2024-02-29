import Banner from '@/containers/home/banner'
import Picks from '@/containers/home/picks'
import TopPicks from '@/containers/home/toppicks'
import NewPick from '@/containers/home/newpick'
import ShopService from '@/services/shop'

export default async function page() {
	const home: any = await ShopService.getPresentation()
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
