import Banner from '@/components/pages/home/Banner'
import Picks from '@/components/pages/home/Picks'
import TopPicks from '@/components/pages/home/TopPicks'
import NewPick from '@/components/pages/home/NewPick'
import Services from '@/lib/services'

export default async function page() {
	const home: any = await Services.shop.getPresentation()
	await Services.user.get()
	return (
		<main className="relative">
			<Banner product={home.banner.data} />
			<Picks products={home.picks} />
			<TopPicks products={home.topPicks} />
			<NewPick product={home.news} />
		</main>
	)
}
