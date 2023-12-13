import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function FilterBar() {
	return (
		<div className="flex justify-between px-6 py-5 bg-pink md:px-12 3xl:px-24">
			<div className="flex gap-2 divide-x divide-solid">
				<div className="flex gap-2">
					<FunnelIcon className="icon" />
					<p className="hidden md:flex">Filter</p>
				</div>
				<p className="pl-2">showing 1-16 of 32 results</p>
			</div>
			<div className="flex items-center">
				<p>Sort by: featured</p>
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	)
}
