'use client'
import { shopItemsInterface } from '@/utils/Interfaces'
import React, { useState } from 'react'

type Props = {
	shopItem: shopItemsInterface
}

export default function ContentImage({ shopItem }: Props) {
	const [url, setUrl] = useState('')
	const changeUrl = (url: string) => {
		setUrl(url)
	}
	return (
		<div className="grid grid-cols-1 gap-4">
			<div className='flex order-2 w-full justify-evenly'>
				<img
					src={shopItem.colors[0].urlList[0]}
					className="w-16 h-16"
					onClick={() => changeUrl(shopItem.colors[0].urlList[0])}
				/>
				<img
					src={shopItem.colors[0].urlList[1]}
					className="w-16 h-16"
					onClick={() => changeUrl(shopItem.colors[0].urlList[1])}
				/>
				<img
					src={shopItem.colors[0].urlList[2]}
					className="w-16 h-16"
					onClick={() => changeUrl(shopItem.colors[0].urlList[2])}
				/>
			</div>
			<div>
				<img
					src={url.length == 0 ? shopItem.colors[0].urlList[0] : url}
					className="w-full h-[450px]"
				/>
			</div>
		</div>
	)
}
