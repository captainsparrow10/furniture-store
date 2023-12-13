import React from 'react'
import FilterBar from './FilterBar'
import Link from 'next/link'
import NavegationBtn from '@/UI/Components/Button/NavegationBtn'
import { shopItemsInterface } from '@/utils/Interfaces'
import CardItem from '@/UI/Components/Card/CardItem'
type Props = {
	shopItems: shopItemsInterface[]
}
export default function ContentShop({ shopItems }: Props) {
	return (
		<div className="flex flex-col py-16 gap-y-12">
			<FilterBar />
			<div className="w-full px-3 sm:px-6 lg:px-12 3xl:px-24 flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-16 place-items-center max-w-fit">
					{shopItems.map((item) => (
						<Link href={`/shop/${item._id}`} key={item._id}>
							<CardItem
								image={item.colors[0].urlList[0]}
								name={item.name}
								price="250"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="flex justify-center px-6 lg:px-12 2xl:px-24">
				<NavegationBtn />
			</div>
		</div>
	)
}
