'use client'
import Link from 'next/link'
import React from 'react'

export default function product({ product }: any) {
	return (
		<div className="h-[1000px] px-6 lg:px-12 2xl:px-24 bg-yellow">
			<div
				className="flex w-full h-full lg:flex-row flex-col items-center justify-center"
				title="product"
			>
				<div className="flex flex-col w-full max-w-[430px] h-fit">
					<h1>{product.name}</h1>
					<Link href={`/shop/${product._id}`}>
						<button className="group w-fit">
							Shop Now
							<div className="invisible group-hover:visible line-black" />
						</button>
					</Link>
				</div>
				<div className="relative w-full h-full max-h-[500px] max-w-[600px] lg:max-h-none">
					<img src={product.colorRef} alt={product.name} className='w-full h-full' />
				</div>
			</div>
		</div>
	)
}
