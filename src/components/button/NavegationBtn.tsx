import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function NavegationBtn() {
	return (
		<div className="flex gap-4">
			<p className="btn-navegation bg-cream">
				<ChevronLeftIcon className="icon" />
			</p>
			<p className="btn-navegation  bg-yellow">1</p>
			<p className="btn-navegation  bg-cream">2</p>
			<p className="btn-navegation  bg-cream">3</p>
			<p className="btn-navegation  bg-cream">
				<ChevronRightIcon className="icon" />
			</p>
		</div>
	)
}
