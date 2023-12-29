'use client'
import Count from '@/UI/Components/Button/Count'
import React, { useState } from 'react'
import ContentImage from './ContentImage'
import { shopSingleItemInterface } from '@/utils/Interfaces'
import { StarIcon } from '@heroicons/react/20/solid'
type Props = {
	shopItem: shopSingleItemInterface
}
export default function ContentProduct({ shopItem }: Props) {
	const [count, setCount] = useState(1)
	const handlePlusNumber = () => {
		if (shopItem.available >= count) {
			return setCount(count + 1)
		}
		return
	}
	const handleLessNumber = () => {
		if (count > 1) {
			return setCount(count - 1)
		}
		return
	}
	return (
		<div className="py-12 px-6 flex flex-wrap gap-6 justify-center">
			<ContentImage shopItem={shopItem} />
			<div className="flex flex-col gap-3 max-w-[450px] w-full">
				<div>
					<h3>{shopItem.name}</h3>
					<h4 className="text-gray">$ {shopItem.price}</h4>
				</div>
				<div className="flex divide-x items-center gap-3">
					<div className="flex gap-1 items-center">
						<StarIcon className="h-5 w-5 text-yellow" />
						<h5>5</h5>
					</div>
					<h5 className="pl-2">n reviews</h5>
				</div>
				<p>{shopItem.description}</p>
				<div className="flex flex-col gap-2">
					<h5>Color</h5>
					<div className="flex gap-3">
						{shopItem.colors.map((color) => (
							<span
								className={`icon rounded-full`}
								style={{ backgroundColor: color.name }}
								key={color._id}
							></span>
						))}
					</div>
				</div>
				<div className="flex gap-3 flex-wrap mt-4">
					<Count
						number={count}
						handlePlusNumber={handlePlusNumber}
						handleLessNumber={handleLessNumber}
					/>
					<button className="btn-lg">Add to cart</button>
				</div>
				<div className="line my-6" />
				<div className="flex flex-col gap-3">
					<div className="flex gap-2">
						<p className="text-gray">SKU:</p>
						<p className="text-gray">{shopItem._id}</p>
					</div>
					<div className="flex gap-1">
						<p className="text-gray">Tags:</p>
						{shopItem.tags.map((tag, index) => (
							<p className="text-gray capitalize" key={tag._id}>
								{tag.name}
								{index !== shopItem.tags.length - 1 ? ',' : ''}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
