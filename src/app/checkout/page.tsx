import Banner from '@/components/Common/Banner'
import Footer from '@/components/Common/Footer'
import Sponsor from '@/components/Common/Sponsor'
import NavBar from '@/components/navegation/NavBar'
import React from 'react'

export default function page() {
	return (
		<main>
			<NavBar />
			<Banner />
			<div className="flex justify-center py-16 gap-x-24">
				<div className="flex flex-col gap-y-9 w-[423px]">
					<h3>Billing Details</h3>
					<div className="flex gap-x-9">
						<div className="w-1/2">
							<p className="body2">first name</p>
							<input type="text" className="input" placeholder="John" />
						</div>
						<div className="w-1/2">
							<p className="body2">last name</p>
							<input type="text" className="input" placeholder="Doe" />
						</div>
					</div>
					<div className="input-space">
						<p className="body2">
							company name <span className="text-gray">(Optional)</span>
						</p>
						<input
							type="text"
							className="input"
							placeholder="Sparrow company"
						/>
					</div>
					<div className="input-space">
						<p className="body2">country / region</p>
						<input type="text" className="input" placeholder="Mexico" />
					</div>
					<div className="input-space">
						<p className="body2">Street address</p>
						<input type="text" className="input" placeholder="Mexico city" />
					</div>
					<div className="input-space">
						<p className="body2">Province</p>
						<input type="text" className="input" placeholder="Mexico" />
					</div>
					<div className="input-space">
						<p className="body2">ZIP code</p>
						<input type="text" className="input" placeholder="1234" />
					</div>
					<div className="input-space">
						<p className="body2">Phone</p>
						<input type="text" className="input" placeholder="123456" />
					</div>
					<div className="input-space">
						<p className="body2">email address</p>
						<input type="email" className="input" placeholder="1234" />
					</div>
				</div>
				<div className="flex flex-col gap-y-9 w-[423px]">
					<div className="flex justify-between">
						<p className="body1">Products</p>
						<p className="body1">Price</p>
					</div>
					<div className="flex flex-col gap-y-2">
						<div className="flex justify-between">
							<p className="body2 text-gray">
								Asgaard Sofa <span className="font-bold">x 1</span>
							</p>
							<p className="body2"> 250.00</p>
						</div>
						<div className="flex justify-between">
							<p className="body2 text-gray">
								Asgaard Sofa <span className="font-bold">x 1</span>
							</p>
							<p className="body2"> 250.00</p>
						</div>
						<div className="flex justify-between">
							<p className="body2 text-gray">
								Asgaard Sofa <span className="font-bold">x 1</span>
							</p>
							<p className="body2"> 250.00</p>
						</div>
						<div className="flex justify-between">
							<p className="body2 text-gray">
								Asgaard Sofa <span className="font-bold">x 1</span>
							</p>
							<p className="body2"> 250.00</p>
						</div>
					</div>
					<div className="flex justify-between">
						<p className="body2">total</p>
						<p className="body2 font-bold">$ 1000.00</p>
					</div>
					<div className='flex flex-col items-center gap-y-6'>
						<div className="line" />
						<p>
							Your personal data will be used to support your experience
							throughout this website, to manage access to your account, and for
							other purposes described in our privacy policy.
						</p>
						<button className="btn-lg">Place order</button>
					</div>
				</div>
			</div>
			<Sponsor />
			<Footer />
		</main>
	)
}
