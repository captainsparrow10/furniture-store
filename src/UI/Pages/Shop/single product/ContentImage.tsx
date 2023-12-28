'use client'
import { shopSingleItemInterface } from '@/utils/Interfaces'
import React, { useState } from 'react'

type Props = {
	shopItem: shopSingleItemInterface
}

export default function ContentImage({ shopItem }: Props) {
	const [url, setUrl] = useState('')
	const changeUrl = (url: string) => {
		setUrl(url)
	}
	return (
		<div className="flex-wrap gap-4  w-full max-w-[420px] flex">
			<div className="flex order-2 w-full justify-evenly sm:order-1 sm:flex-col sm:w-fit sm:justify-start">
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

			<img
				src={url.length == 0 ? shopItem.colors[0].urlList[0] : url}
				className="w-full h-[450px] max-w-[320px] sm:order-2"
			/>
		</div>
	)
}
