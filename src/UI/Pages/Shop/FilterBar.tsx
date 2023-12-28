'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
interface FilterBarProps {
	results: number
	sortby: (state: string) => void // Tipo de sortby como una función que toma un string y no retorna nada
}
export default function FilterBar({ results, sortby }: FilterBarProps) {
	const [state, setState] = useState("default")
	const handleClick = () => {
		sortby('name_asc')
	}
	return (
		<div className="flex justify-between px-6 py-5 bg-pink md:px-12 3xl:px-24">
			<div className="flex gap-2 divide-x divide-solid items-center">
				<div className="flex gap-2 items-center">
					<FunnelIcon className="icon" />
					<p className="hidden md:flex">Filter</p>
				</div>
				<p className="pl-2">showing {results} results</p>
			</div>
			<div className="flex items-center space-x-4 w-[150px]">
				<div className='w-full relative h-full'>
					<div className="absolute flex flex-col gap-2 z-50  overflow-hidden">
						<h5>Default</h5>
						<h5>Name ASC</h5>
						<h5>Name DESC</h5>
						<h5>Price ASC</h5>
						<h5>Price DESC</h5>
					</div>
				</div>

				<ChevronDownIcon className="icon flex-shrink-0" />
			</div>
		</div>
	)
}
