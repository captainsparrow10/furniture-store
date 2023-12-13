import React from 'react'

export default function Sponsor() {
	return (
		<div className="flex px-6 lg:px-12 py-16 3xl:px-24  bg-pink justify-center">
			<div className='flex gap-x-6 pb-4 overflow-hidden overflow-x-scroll w-fit 2xl:overflow-x-hidden'>
				<div className="min-w-[350px]">
					<h3>Free delivery</h3>
					<h5 className=" text-gray">
						For all oders over $50, consectetur adipim scing elit.
					</h5>
				</div>
				<div className="min-w-[350px]">
					<h3>Secure Payment</h3>
					<h5 className="text-gray">
						100% secure payment, consectetur adipim scing elit.
					</h5>
				</div>
				<div className="min-w-[350px]">
					<h3>90 Days Return</h3>
					<h5 className="body2 text-gray">
						If goods have problems, consectetur adipim scing elit.
					</h5>
				</div>
			</div>
		</div>
	)
}
