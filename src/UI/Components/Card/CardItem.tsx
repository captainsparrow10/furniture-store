/* eslint-disable @next/next/no-img-element */
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
type Props = {
	image: string 
	name: string
	price: string
}
export default function CardItem({ image, name, price }: Props) {
	return (
		<div className="w-[287px] h-[372px] flex flex-col gap-y-2">
				<div className="w-full h-[292px]">
						<img
							src={image}
							alt={name}
							className="w-full h-full"
						/>
					</div>
			<h5>{name}</h5>
			<h4 className="font-bold">$ {price}</h4>
		</div>
	)
}
