'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React, { useState } from 'react'
interface FilterBarProps {
	results: number | undefined
	sortby: (state: number) => void
}
export default function FilterBar({ results, sortby }: FilterBarProps) {
	const [state, setState] = useState('Default')
	const [view, setView] = useState(false)
	const orderbys = [
		{
			id: 5,
			name: 'Default',
		},
		{
			id: 1,
			name: 'Name ASC',
		},
		{
			id: 2,
			name: 'Name DESC',
		},
		{
			id: 3,
			name: 'Price ASC',
		},
		{
			id: 4,
			name: 'Price DESC',
		},
	]
	const [orderName, setOrderName] = useState(orderbys)
	const handleOrderName = (name: string) => {
		const index = orderName.findIndex((order) => order.name === name)

		if (index !== -1) {
			const item = orderName.splice(index, 1)[0]
			orderName.unshift(item)
			setOrderName(orderName)
		}
	}
	const handleOrderBy = (id: number) => {
		sortby(id)
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
			<div className="flex items-center">
				<div className="relative h-full w-fit">
					<div
						className={clsx(
							'absolute  flex-col gap-y-6 z-50 pb-6 px-2  overflow-hidden bg-pink w-28',
							{
								flex: view == true,
								hidden: view == false,
							}
						)}
					>
						{orderName.map((order) => (
							<h5
								key={order.id}
								className={clsx(
									'hover:font-bold cursor-pointer',
									state == order.name && 'font-bold'
								)}
								onClick={() => {
									setState(order.name)
									setView(!view)
									handleOrderName(order.name)
									handleOrderBy(order.id)
								}}
							>
								{order.name}
							</h5>
						))}
					</div>
					<h5 className=" w-28 font-bold px-2">{state}</h5>
				</div>
				<ChevronDownIcon
					className="icon flex-shrink-0"
					onClick={() => setView(!view)}
				/>
			</div>
		</div>
	)
}
