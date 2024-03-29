import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Picks({ products }: any) {
	return (
		<div
			className="flex px-6 lg:px-12 2xl:px-24 sm:gap-12 py-12  bg-pink justify-center"
		>
			<div className="flex gap-8 sm:gap-12 pb-4 overflow-hidden overflow-x-scroll w-full max-w-[950px] md:overflow-x-hidden">
				{products.map((product: any) => (
					<div
						className="h-full min-w-[300px] w-full max-w-[500px]"
						key={product.data[0]._id}
					>
						<div className="relative w-full h-[450px]">
							<Image
								src={product.data[0].colorRef}
								alt={product.data[0].name}
								fill
							/>
						</div>
						<div>
							<h3>{product.data[0].name}</h3>
							<Link href={`/shop/${product.data[0]._id}`}>
								<button className="group w-fit">
									Shop Now
									<div className="opacity-0 group-hover:opacity-100 line-black transition-all duration-300 ease-in-out" />
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
