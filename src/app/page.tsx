import NavBar from '@/components/navegation/NavBar'
import React from 'react'
import Footer from '@/components/Common/Footer'
import Banner from '@/components/Common/Banner'
import Picks from '@/components/Common/Picks'
import TopPicks from '@/components/Common/TopPicks'
import NewPick from '@/components/Common/NewPick'
export default async function page() {
	return (
		<main className="relative">
			<Banner />
			<Picks />
			<TopPicks />
			<NewPick />
		</main>
	)
}
