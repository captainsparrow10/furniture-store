import { BannerType } from '@/utils/Types'
import Image from 'next/image'
import React from 'react'
 type Props = {
	banner: BannerType
 }

export default function Banner({banner}:Props) {
	return (
		<div className="h-[1000px] px-6 lg:px-12 2xl:px-24 bg-yellow">
			<div
				className=" flex w-full h-full lg:flex-row flex-col items-center justify-center"
				title="banner"
			>
				<div className="flex flex-col w-full max-w-[430px] h-fit">
					<h1>{banner.name}</h1>
					<button className="group w-fit">
						Shop Now
						<div className="invisible group-hover:visible line-black" />
					</button>
				</div>
				<div className="relative w-full h-full max-h-[500px] max-w-[600px] lg:max-h-none">
					<Image src={banner.colorRef} alt={banner.name} fill />
				</div>
			</div>
		</div>
	)
}
