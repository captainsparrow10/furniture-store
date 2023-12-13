'use client'
import Banner from '@/components/Common/Banner'
import Footer from '@/components/Common/Footer'
import Sponsor from '@/components/Common/Sponsor'
import NavBar from '@/components/navegation/NavBar'
import {
	EyeDropperIcon,
	EyeIcon,
	EyeSlashIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function Page() {
	const [see, setSee] = useState(false)
	return (
		<main>
			<NavBar />
			<Banner />
			<div className="flex justify-center px-24 py-16 gap-x-24">
				<div className="flex flex-col gap-y-9 w-[423px]">
					<h3>log in</h3>
					<div className="input-space">
						<p className="body2">Username or email address</p>
						<input type="text" className="input" placeholder="username" />
					</div>
					<div className="input-space">
						<p className="body2">Password</p>
						<div className="px-6 py-4 w-full  border border-gray rounded-xl flex gap-x-2">
							<input
								type={see ? 'text' : 'password'}
								className="text-[16px] font-normal placeholder:text-gray outline-none flex grow"
								placeholder="password"
							/>
							{see ? (
								<EyeSlashIcon className="icon" onClick={() => setSee(!see)} />
							) : (
								<EyeIcon className="icon" onClick={() => setSee(!see)} />
							)}
						</div>
						<p className="text-gray">Lost your password?</p>
					</div>
					<button className="btn-lg">login in</button>
				</div>
				<div className='flex flex-col gap-y-9 w-[423px]'>
					<h3>Register</h3>
					<div className="input-space">
						<p className="body2">Email address</p>
						<input type="text" className="input" placeholder="username" />
					</div>
					<div className='input-space'>
						<p>
							A link to set a new password will be sent to your email address.
						</p>
						<p>
							Your personal data will be used to support your experience
							throughout this website, to manage access to your account, and for
							other purposes described in our <span className='font-bold'>privacy policy</span>.
						</p>
					</div>
					<button className="btn-lg">register</button>
				</div>
			</div>
			<Sponsor />
			<Footer />
		</main>
	)
}
