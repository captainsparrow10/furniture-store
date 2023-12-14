import { shopItemsInterface } from '@/utils/Interfaces'
import Image from 'next/image'
import React from 'react'
type Props = {
  id : string
}
export default async function RelatedProducts({id}:Props) {
  const res = await fetch('http://localhost:3000/api/shop')
	const shopItems: shopItemsInterface[] = await res.json()
	const filters = ['cuarto', 'mesa', 'cajon', 'mueble']
  const filteredItems = shopItems.filter(item => {
    const matchingTags = item.tags.filter(tag => filters.includes(tag.name));
    return matchingTags.length >= 2 && item._id !== id;
  });
  
	return (
		<div
			title="relatedProducts"
			className="px-6 py-12 lg:px-12 3xl:px-24 flex flex-col gap-6 sm:gap-12"
		>
			<div className="flex flex-col gap-4 items-center">
				<h3 className="w-fit">Related Products</h3>
			</div>
			<div className="w-full flex justify-center">
				<div className="flex gap-6 pb-4  overflow-hidden overflow-x-scroll w-fit 2xl:md:overflow-x-hidden">
					{filteredItems.map((item) => (
						<div className="min-w-[300px] h-full flex flex-col gap-3" key={item._id}>
							<div className="relative w-full h-[300px]">
								<Image src={item.colors[0].urlList[0]} alt={item.name} fill />
							</div>
							<h5>{item.name}</h5>
							<h4>{item.price}</h4>
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
