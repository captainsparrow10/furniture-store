'use client'
import React, { useState } from 'react'
import FilterBar from './FilterBar'
import Link from 'next/link'
import { ShopItemSelectedInterface } from '@/lib/Interfaces/ShopInterface'
import CardItem from '@/components/card/CardItem'
type Props = {
	shopItems: ShopItemSelectedInterface
}
export default function ContentShop({ shopItems }: Props) {
	const [orderby, setOrderby] = useState(shopItems.default)
	const setOrderBySelected = (state: number) => {
		if (state == 1) {
			return setOrderby(shopItems.name.ascending)
		}
		if (state == 2) {
			return setOrderby(shopItems.name.descending)
		}
		if (state == 3) {
			return setOrderby(shopItems.price.ascending)
		}
		if (state == 4) {
			return setOrderby(shopItems.price.descending)
		}
		return shopItems.default
	}

	return (
		<div className="flex flex-col py-16 gap-y-12">
			<FilterBar results={orderby.length} sortby={setOrderBySelected} />
			<div className="w-full px-3 sm:px-6 lg:px-12 3xl:px-24 flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-16 place-items-center max-w-fit">
					{orderby.map((item) => (
						<Link href={`/shop/${item._id}`} key={item._id}>
							<CardItem
								image={item.colors.urlList}
								name={item.name}
								price={item.price}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
