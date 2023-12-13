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
		<div className="flex gap-6 ">
			<div>
				<>
					<img
						src={shopItem.colors[0].urlList[0]}
						className="w-12 h-12"
						onClick={() => changeUrl(shopItem.colors[0].urlList[0])}
					/>
					<img
						src={shopItem.colors[0].urlList[1]}
						className="w-12 h-12"
						onClick={() => changeUrl(shopItem.colors[0].urlList[1])}
					/>
					<img
						src={shopItem.colors[0].urlList[2]}
						className="w-12 h-12"
						onClick={() => changeUrl(shopItem.colors[0].urlList[2])}
					/>
				</>
			</div>
			<div>
				<img
					src={url.length == 0 ? shopItem.colors[0].urlList[0] : url}
					className="w-full h-[300px]"
				/>
			</div>
		</div>
	)
}
