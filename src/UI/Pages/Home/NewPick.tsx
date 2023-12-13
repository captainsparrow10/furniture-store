import { BannerType } from '@utils/Types'
import Image from 'next/image'
import React from 'react'
type Props = {
	banner: BannerType
 }
export default function NewPick({banner}:Props) {

	return (
		<div className="flex px-6 py-6 bg-cream justify-center flex-wrap items-center h-[700px]">
			<div className="relative w-full max-w-[400px] h-3/5 lg:h-full">
				<Image src={banner.colorRef} alt={banner.name} fill />
			</div>

			<div className="w-fit h-2/5 lg:h-fit flex flex-col gap-3 justify-center  items-center text-center">
				<div className="w-full max-w-[350px]">
					<h4 className="text-center">New Arrivals</h4>
					<h2>{banner.name}</h2>
				</div>
				<button className="btn-lg rounded-none">Order Now</button>
			</div>
		</div>
	)
}
