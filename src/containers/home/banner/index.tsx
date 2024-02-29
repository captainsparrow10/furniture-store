'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner({ product }: any) {
	return (
		<div className="h-screen px-6 lg:px-12 2xl:px-24 bg-yellow">
			<div className="flex w-full h-full lg:flex-row flex-col items-center justify-center">
				<div className="flex flex-col w-full max-w-[430px] h-fit">
					<h1>{product.name}</h1>
					<Link href={`/shop/${product._id}`}>
						<button className="group w-fit">
							Shop Now
							<div className="opacity-0 group-hover:opacity-100 line-black transition-all duration-300 ease-in-out" />
						</button>
					</Link>
				</div>
				<div className="relative w-full h-full max-h-[500px] max-w-[600px] lg:max-h-none">
					<Image src={product.colorRef} alt={product.name} fill />
				</div>
			</div>
		</div>
	)
}
