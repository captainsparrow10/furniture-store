/* eslint-disable @next/next/no-img-element */
import Banner from '@/components/Common/Banner'
import Footer from '@/components/Common/Footer'
import Sponsor from '@/components/Common/Sponsor'
import NavBar from '@/components/navegation/NavBar'
import { Items } from '@/utils/type'
import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default async function page() {
	const res = await fetch('http://localhost:3000/api/items')
	const data: Items[] = await res.json()
	return (
		<main>
			<NavBar />
			<Banner />
			<div className="py-16 flex justify-center flex-wrap gap-x-9">
				<div className="input-space">
					<div className="grid grid-cols-12 gap-5 w-[817px] bg-cream py-3">
						<p className="body2 font-bold col-span-5 flex justify-center">
							Product
						</p>
						<p className="body2 font-bold col-span-2 flex justify-center">
							Price
						</p>
						<p className="body2 font-bold col-span-2 flex justify-center">
							Quantity
						</p>
						<p className="body2 font-bold col-span-2 flex justify-center">
							Total
						</p>
					</div>
					<div className="grid grid-cols-12 gap-5 h-[106px] w-[817px]">
						<div className="col-span-2 w-full h-[106px] bg-cream rounded-xl">
							<img
								src={data[0].link}
								alt={data[0].name}
								className="w-full h-full"
							/>
						</div>
						<p className="col-span-3 h-full flex justify-center items-center body2 text-gray">
							{data[0].name}
						</p>
						<p className="col-span-2 h-full flex justify-center items-center body2 text-gray">
							$250.00
						</p>
						<div className="col-span-2 h-full flex justify-center items-center">
							<p className="h-8 w-8 rounded-xl border border-gray body2 flex justify-center items-center">
								1
							</p>
						</div>
						<p className="col-span-2 h-full flex justify-center items-center body2 text-gray">
							$250.00
						</p>
						<div className=" col-span-1 flex justify-center items-center">
							<TrashIcon className="icon text-gray hover:text-black" />
						</div>
					</div>
					<div className="grid grid-cols-12 gap-5 h-[106px] w-[817px]">
						<div className="col-span-2 w-full h-[106px] bg-cream rounded-xl">
							<img
								src={data[0].link}
								alt={data[0].name}
								className="w-full h-full"
							/>
						</div>
						<p className="col-span-3 h-full flex justify-center items-center body2 text-gray">
							{data[0].name}
						</p>
						<p className="col-span-2 h-full flex justify-center items-center body2 text-gray">
							$250.00
						</p>
						<div className="col-span-2 h-full flex justify-center items-center">
							<p className="h-8 w-8 rounded-xl border border-gray body2 flex justify-center items-center">
								1
							</p>
						</div>
						<p className="col-span-2 h-full flex justify-center items-center body2 text-gray">
							$250.00
						</p>
						<div className=" col-span-1 flex justify-center items-center">
							<TrashIcon className="icon text-gray hover:text-black" />
						</div>
					</div>
				</div>
				<div className="bg-cream px-12 py-6 flex flex-col items-center w-[393px] gap-y-12">
					<h3>Car Total</h3>
					<div className="flex flex-col w-full gap-y-6">
						<div className="flex flex-col w-full gap-y-3">
							<div className="flex justify-between w-full">
								<p className="body2">Sub Total</p>
								<p className="body2 text-gray">500.00</p>
							</div>
							<div className="flex justify-between w-full">
								<p className="body2">ITBMS</p>
								<p className="body2 text-gray">7%</p>
							</div>
						</div>
						<div className="flex justify-between w-full">
							<p className="body2">Total</p>
							<p className="body2 font-bold">535.00</p>
						</div>
					</div>
					<button className="btn-lg">Check Out</button>
				</div>
			</div>
			<Sponsor />
			<Footer />
		</main>
	)
}
