import { BannerType } from '@/utils/type'
import Image from 'next/image'
import React from 'react'

export default async function Picks() {
	const data = await fetch('http://localhost:3000/api/banner')

	const banner: BannerType = await data.json()
	const picks = [1, 2]
	return (
		<div
			title="Picks"
			className="flex px-6 lg:px-12 2xl:px-24 sm:gap-12 py-12  bg-pink justify-center"
		>
			<div className="flex gap-8 sm:gap-12 pb-4 overflow-hidden overflow-x-scroll w-full max-w-[950px] md:overflow-x-hidden">
				{picks.map((pick) => (
					<div
						className="h-full min-w-[300px] w-full max-w-[500px]"
						key={pick}
					>
						<div className="relative w-full h-[450px]">
							<Image src={banner.colorRef} alt={banner.name} fill />
						</div>
						<div>
							<h3>{banner.name}</h3>
							<button className="group w-fit">
								Shop Now
								<div className="invisible group-hover:visible line-black" />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
