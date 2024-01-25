'use client'
import { ShopSingleItemType } from '@/types/shop'
import Image from 'next/image'
import React, { useState } from 'react'
type Props = {
	shopItem: ShopSingleItemType
}

export default function ContentImage({ shopItem }: Props) {
	const [url, setUrl] = useState('')
	const changeUrl = (url: string) => {
		setUrl(url)
	}
	return (
		<div className="flex-wrap gap-4  w-full max-w-[420px] flex">
			<div className="flex order-2 w-full justify-evenly sm:order-1 sm:flex-col sm:w-fit sm:justify-start gap-6">
				{shopItem.colors[0].urlList.map((url) => (
					<Image
						src={url}
						alt={shopItem.name}
						width={64}
						height={64}
						key={url}
						onClick={() => changeUrl(url)}
					/>
				))}
			</div>
			<div className="w-full h-[450px] max-w-[320px] sm:order-2 relative">
				<Image
					src={url.length == 0 ? shopItem.colors[0].urlList[0] : url}
					alt={shopItem.name}
					fill
				/>
			</div>
		</div>
	)
}
