'use client'
import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function Page() {
	const [see, setSee] = useState(false)
	return (
		<main>
			<Indications />
			<div className="py-16 px-6 flex flex-wrap gap-12 justify-center items-center">
				<div className="flex flex-col justify-between w-full max-w-[350px]  h-[380px]">
					<h3>Login</h3>
					<div>
						<h5>E-mail</h5>
						<input
							type="text"
							placeholder="example@gmail.com"
							className="input"
						/>
					</div>
					<div>
						<h5>Password</h5>
						<div className="flex  items-center input gap-3">
							<input
								type={see ? 'text' : 'password'}
								placeholder="123456"
								className="flex w-full text-[16px] font-normal placeholder:text-gray border outline-none border-none"
							/>
							{see ? (
								<EyeSlashIcon
									className="icon shrink-0"
									onClick={() => setSee(!see)}
								/>
							) : (
								<EyeIcon
									className="icon shrink-0"
									onClick={() => setSee(!see)}
								/>
							)}
						</div>
						<p className="text-gray mt-2">Lost your password?</p>
					</div>
					<button className='btn-lg'>
						Login In
					</button>
				</div>
				<div className="flex flex-col justify-between w-full max-w-[350px] h-[380px]">
					<h3>Resgiter</h3>
					<div>
						<h5>E-mail</h5>
						<input
							type="text"
							placeholder="example@gmail.com"
							className="input"
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<p>
							A link to set a new password will be sent to your email address.
						</p>
						<p>
							Your personal data will be used to support your experience
							throughout this website, to manage access to your account, and for
							other purposes described in our{' '}
							<span className="font-bold">privacy policy</span>.
						</p>
					</div>
					<button className='btn-lg'>
						Register
					</button>
				</div>
			</div>
			<Sponsor />
		</main>
	)
}
