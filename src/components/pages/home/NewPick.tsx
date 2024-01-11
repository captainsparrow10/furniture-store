
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewPick({ product }: any) {

	return (
		<div className="flex px-6 py-6 bg-cream justify-center flex-wrap items-center h-[700px]">
			<div className="relative w-full max-w-[500px] h-3/5 lg:h-4/5">
				<Image src={product.colors.urlList} alt={product.name} fill/>
			</div>

			<div className="w-fit h-2/5 lg:h-fit flex flex-col gap-3 justify-center  items-center text-center">
				<div className="w-full max-w-[350px]">
					<h4 className="text-center">New Arrivals</h4>
					<h2>{product.name}</h2>
				</div>
				<Link href={`/shop/${product._id}`}>
				<button className="btn-lg rounded-none">Order Now</button>
				</Link>
			</div>
		</div>
	)
}
