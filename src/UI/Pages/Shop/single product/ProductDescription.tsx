'use client'
import {  shopSingleItemInterface } from '@/utils/Interfaces'
import React, { useState } from 'react'
import clsx from 'clsx'
type Props = {
	shopItem: shopSingleItemInterface
}
export default function ProductDescription({ shopItem }: Props) {
	const [state, setState] = useState('description')
	return (
		<div className="flex flex-col px-6 py-12 lg:px-12 3xl:px-24 gap-12">
			<div className="flex gap-12">
				<h4
					className={clsx({ 'text-gray font-normal': state === 'review' })}
					onClick={() => setState('description')}
				>
					Description
				</h4>
				<h4
					className={clsx({ 'text-gray font-normal': state === 'description' })}
					onClick={() => setState('review')}
				>
					Reviews
				</h4>
			</div>
			<div>
				<h5 className={clsx({ hidden: state === 'review' })}>
					{shopItem.description}
				</h5>
				<h5 className={clsx({ hidden: state === 'description' })}>reviews</h5>
			</div>
		</div>
	)
}
