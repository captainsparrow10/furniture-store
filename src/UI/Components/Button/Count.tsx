'use client'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'

type Props = {
	number: number
	handlePlusNumber: () => void
	handleLessNumber: () => void
}
export default function Count({
	number,
	handlePlusNumber,
	handleLessNumber,
}: Props) {
	return (
		<div className="flex justify-center px-4 py-5 gap-6 items-center border border-black w-fit rounded-xl">
			<button onClick={handlePlusNumber}>
				<PlusIcon className="h-4 w-4 text-black" />
			</button>
			<h4>{number}</h4>
			<button onClick={handleLessNumber}>
				<MinusIcon className="h-4 w-4 text-black" />
			</button>
		</div>
	)
}
