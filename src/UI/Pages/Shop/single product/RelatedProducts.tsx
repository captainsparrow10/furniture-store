import { shopItemsInterface, shopSingleItemInterface } from '@/utils/Interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Props = {
	id: string
	tags: {
		_id: string
		name: string
	}[]
}
export default async function RelatedProducts({ id, tags }: Props) {
	let tagNames: string | string[]
	if (tags.length === 1) {
		tagNames = tags[0].name
	} else {
		tagNames = tags.map((tag) => tag.name.toLowerCase()).join('/')
		const res = await fetch(`http://localhost:3000/api/shop/${id}/${tagNames}`)
		const shopItems: shopSingleItemInterface[] = await res.json()

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
						{shopItems.map((item) => (
							<Link href={`/shop/${item._id}`} key={item._id}>
								<div className="min-w-[300px] h-full flex flex-col gap-3">
									<div className="relative w-full h-[300px]">
										<Image
											src={item.colors[0].urlList[0]}
											alt={item.name}
											fill
										/>
									</div>
									<h5>{item.name}</h5>
									<h4>{item.price}</h4>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className="w-full flex justify-center">
					<Link href="/shop">
						<button className="group w-fit">
							View More
							<div className="invisible group-hover:visible line-black" />
						</button>
					</Link>
				</div>
			</div>
		)
	}
}
