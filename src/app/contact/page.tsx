import Sponsor from '@/components/Sponsor'
import Indications from '@/components/navegation/Indications'
import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function page() {
	return (
		<main>
			<Indications />
			<div className="py-24 flex flex-col justify-center h-full w-full gap-y-24 items-center px-3 sm:px-6 lg:px-12 3xl:px-24">
				<div className="max-w-[644px] w-full flex flex-col items-center">
					<h3>Get in touch with us</h3>
					<p className="body2 text-center text-gray">
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
						Not Hesitate!
					</p>
				</div>
				<div className="flex flex-wrap px-3 sm:px-6  gap-6 w-full justify-center">
					<div className="max-w-[277px] w-full flex flex-col gap-y-12">
						<div className="flex gap-x-6">
							<MapPinIcon className="h-9 w-9" />
							<div className="w-full">
								<h4>Address</h4>
								<p className="text-gray">
									236 5th SE Avenue, New York NY10000, United States
								</p>
							</div>
						</div>
						<div className="flex gap-x-6">
							<PhoneIcon className="h-9 w-9" />
							<div className="w-full">
								<h4>Phone</h4>
								<p className="text-gray">Mobile: +(84) 546-6789</p>
								<p className="text-gray">Hotline: +(84) 456-6789</p>
							</div>
						</div>
						<div className="flex gap-x-6">
							<ClockIcon className="h-9 w-9" />
							<div className="w-full">
								<h4>working time</h4>
								<p className="text-gray">Monday-Friday: 9:00 - 22:00</p>
								<p className="text-gray">Saturday-Sunday: 9:00 - 21:00</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-y-6 max-w-[423px] w-full">
						<div className="input-space">
							<h5>Name</h5>
							<input type="text" className="input" placeholder="John Doe" />
						</div>
						<div className="input-space">
							<h5>Email</h5>
							<input
								type="email"
								className="input"
								placeholder="example@gmail.com"
							/>
						</div>
						<div className="input-space">
							<h5>Subject</h5>
							<input
								type="text"
								className="input"
								placeholder="This is optional"
							/>
						</div>
						<div className="input-space">
							<h5>Message</h5>
							<textarea
								className="input h-[200px]"
								placeholder="Hi! I'd like to ask about"
							/>
						</div>
						<button className="btn-lg">submit</button>
					</div>
				</div>
			</div>
			<Sponsor />
		</main>
	)
}
