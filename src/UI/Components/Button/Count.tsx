import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'

type Props = {
	number: number
}
export default function Count({ number }: Props) {
	return (
		<div className="flex justify-center px-4 py-5 gap-6 items-center border border-black w-fit rounded-xl">
			<PlusIcon className="h-4 w-4 text-black" />
			<h4>{number}</h4>
			<MinusIcon className="h-4 w-4 text-black" />
		</div>
	)
}
