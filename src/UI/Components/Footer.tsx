import React from 'react'
import Check from '../Button/Check'

export default function Footer() {
	return (
		<div className="w-full h-full px-6 py-16 gap-12 flex flex-col lg:px-12 3xl:px-24">
			<div className="flex w-full flex-wrap gap-12">
				<h3 className="text-gray flex items-center w-full">e-commerme</h3>
				<div className="flex flex-col gap-y-8">
					<h5 className="text-gray ">Link</h5>
					<div className="flex flex-col gap-y-4">
						<h5 className="hover:font-bold cursor-pointer">Home</h5>
						<h5 className="hover:font-bold cursor-pointer">Shop</h5>
						<h5 className="hover:font-bold cursor-pointer">About</h5>
						<h5 className="hover:font-bold cursor-pointer">Contact</h5>
					</div>
				</div>
        <div className="flex flex-col gap-y-8">
					<h5 className="text-gray">Help</h5>
					<div className="flex flex-col gap-y-4">
						<h5 className="hover:font-bold cursor-pointer">Payment Options</h5>
						<h5 className="hover:font-bold cursor-pointer">Returns</h5>
						<h5 className="hover:font-bold cursor-pointer">Privacy Policies</h5>
					</div>
				</div>
        <div className="flex flex-col gap-y-8">
					<h5 className="text-gray body2">Newsletter</h5>
					<div className="flex gap-x-6 flex-wrap">
						<input type='text' className='input-footer' placeholder='Enter your Email Address' />
						<Check text="SUBSCRIBE" />
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center items-center border border-transparent border-t-gray-line py-4">
				<h5>All rights reserved</h5>
			</div>
		</div>
	)
}
