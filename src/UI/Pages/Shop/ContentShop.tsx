'use client'
import React, { useState } from 'react'
import FilterBar from './FilterBar'
import Link from 'next/link'
import { pruebaInterface, shopItemsInterface } from '@/utils/Interfaces'
import CardItem from '@/UI/Components/Card/CardItem'
type Props = {
	shopItems: shopItemsInterface[]
	pruebas: pruebaInterface
}
export default function ContentShop({ shopItems, pruebas }: Props) {
	const [orderby, setOrderby] = useState(pruebas.default)
	const setOrderBySelected =(state : string) => {
		if (state == "name_asc") {
			return setOrderby(pruebas.name.ascending)
		}
		if (state == "name_desc") {
			return setOrderby(pruebas.name.descending)
		}
		if (state == "price_asc") {
			return setOrderby(pruebas.price.ascending)
		}
		if (state == "price_desc") {
			return setOrderby(pruebas.price.descending)
		}
		return pruebas.default
	}
	return (
		<div className="flex flex-col py-16 gap-y-12">
			<FilterBar results={shopItems.length} sortby={setOrderBySelected} />
			<div className="w-full px-3 sm:px-6 lg:px-12 3xl:px-24 flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-16 place-items-center max-w-fit">
					{shopItems.map((item) => (
						<Link href={`/shop/${item._id}`} key={item._id}>
							<CardItem
								image={item.colors[0].urlList[0]}
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
