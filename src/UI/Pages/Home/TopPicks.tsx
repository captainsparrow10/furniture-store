import {  PicksType } from '@utils/Types'
import Image from 'next/image'
import React from 'react'
type Props = {
	products: PicksType[]
}
export default function TopPicks({ products }: Props) {
	return (
		<div
			title="TopPicksForYou"
			className="p-6 py-12 lg:px-12 3xl:px-24 flex flex-col gap-6 sm:gap-12"
		>
			<div className="flex flex-col gap-4 items-center">
				<h3 className="w-fit">Top Picks for you</h3>
				<h5 className="text-gray w-fit">
					Find a bright ideal to suit your taste with our great selection of
					suspension, floor and table lights.
				</h5>
			</div>
			<div className="w-full flex justify-center">
				<div className="flex gap-6 pb-4  overflow-hidden overflow-x-scroll w-fit 2xl:md:overflow-x-hidden">
					{products.map((product) => (
						<div className="min-w-[300px] h-full" key={product.data[0]._id}>
							<div className="relative w-full h-[300px]">
								<img src={product.data[0].colorRef} alt={product.data[0].name} className="w-full h-full" />
							</div>
							<h5>{product.data[0].name}</h5>
							<h4>{product.data[0].price}</h4>
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex justify-center">
				<button className="group w-fit">
					View More
					<div className="invisible group-hover:visible line-black" />
				</button>
			</div>
		</div>
	)
}
