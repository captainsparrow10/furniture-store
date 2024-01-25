'use client'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'
import styles from "./styles.module.css"

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
		<div className="flex justify-center px-4 py-5 gap-6 items-center border hover:border-black  border-gray w-fit rounded-xl">
			<button onClick={handleLessNumber}>
				<MinusIcon className="h-4 w-4 hover:text-black text-gray" />
			</button>
			<h4>{number}</h4>
			<button onClick={handlePlusNumber}>
				<PlusIcon className="h-4 w-4 hover:text-black text-gray" />
			</button>
		</div>
	)
}
