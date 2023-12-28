import { SponsorType } from '@/utils/Types'
import React from 'react'

export default async function Sponsor() {
	const data = await fetch('http://localhost:3000/api/sponsor')
	const sponsor : SponsorType = await data.json()
	return (
		<div className="flex px-6 lg:px-12 py-16 3xl:px-24  bg-pink justify-center">
			<div className='flex gap-x-6 pb-4 overflow-hidden overflow-x-scroll w-fit 2xl:overflow-x-hidden'>
				<div className="min-w-[350px]">
					<h3>{sponsor.title1}</h3>
					<h5 className=" text-gray">
					{sponsor.description1}
					</h5>
				</div>
				<div className="min-w-[350px]">
					<h3>{sponsor.title2}</h3>
					<h5 className="text-gray">
					{sponsor.description2}
					</h5>
				</div>
				<div className="min-w-[350px]">
					<h3>{sponsor.title3}</h3>
					<h5 className="body2 text-gray">
					{sponsor.description3}
					</h5>
				</div>
			</div>
		</div>
	)
}
