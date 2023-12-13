import Banner from '@/components/Common/Banner'
import Footer from '@/components/Common/Footer'
import Sponsor from '@/components/Common/Sponsor'
import NavBar from '@/components/navegation/NavBar'
import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function page() {
	return (
		<main>
			<NavBar />
			<Banner />

			<div className="py-24 flex flex-col justify-center h-full w-full gap-y-24 items-center">
				<div className="w-[644px] flex flex-col items-center">
					<h3>Get in touch with us</h3>
					<p className="body2 text-center text-gray">
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
						Not Hesitate!
					</p>
				</div>
				<div className="flex gap-x-24">
					<div className="w-[277px] flex flex-col gap-y-12">
						<div className="flex gap-x-6">
							<MapPinIcon className="h-9 w-9" />
							<div className="w-full">
								<p className="body1">Address</p>
								<p className="body2 text-gray">
									236 5th SE Avenue, New York NY10000, United States
								</p>
							</div>
						</div>
						<div className="flex gap-x-6">
							<PhoneIcon className="h-9 w-9" />
							<div className="w-full">
								<p className="body1">Phone</p>
								<p className="body2 text-gray">
									Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
								</p>
							</div>
						</div>
						<div className="flex gap-x-6">
							<ClockIcon className="h-9 w-9" />
							<div className="w-full">
								<p className="body1">working time</p>
								<p className="body2 text-gray">
									Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-y-6 w-[423px]">
						<div className="input-space">
							<p className="body2">Name</p>
							<input type="text" className="input" placeholder="Name" />
						</div>
						<div className="input-space">
							<p className="body2">Email</p>
							<input
								type="email"
								className="input"
								placeholder="example@gmail.com"
							/>
						</div>
						<div className="input-space">
							<p className="body2">Subject</p>
							<input
								type="text"
								className="input"
								placeholder="This is optional"
							/>
						</div>
						<div className="input-space">
							<p className="body2">Message</p>
							<textarea
								className="input h-[200px]"
								placeholder="Hi! i’d like to ask about"
							/>
						</div>
						<button className="btn-lg">submit</button>
					</div>
				</div>
			</div>

			<Sponsor />
			<Footer />
		</main>
	)
}
