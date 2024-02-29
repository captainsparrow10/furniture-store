import CardItem from '@/components/card/CardItem'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopPicks({ products }: any) {
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
				<div className="flex gap-12 pb-4  overflow-hidden  overflow-x-auto w-fit ">
					{products.map((product: any) => (
						<Link
							href={`/shop/${product.data[0]._id}`}
							key={product.data[0]._id}
						>
							<CardItem
								image={product.data[0].colorRef}
								name={product.data[0].name}
								price={product.data[0].price}
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="w-full flex justify-center">
				<Link href="/shop">
					<button className="group w-fit">
						View More
						<div className="opacity-0 group-hover:opacity-100 line-black transition-all duration-300 ease-in-out" />
					</button>
				</Link>
			</div>
		</div>
	)
}
