'use client'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
type Inputs = {
	email: string
	password: string
}
export default function LoginForm() {
	const [see, setSee] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit = handleSubmit(async (data: Inputs, e: any) => {
		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		})
		res?.error ? alert(res.error) : router.push('/')
	})
	return (
		<div className="py-16 px-6 flex gap-12 justify-center items-center">
			<form
				className="flex flex-col gap-4 w-full max-w-[350px]  h-[380px]"
				onSubmit={onSubmit}
			>
				<h3>Login</h3>
				<div>
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						placeholder="example@gmail.com"
						className="input"
						{...register('email', {
							required: true,
						})}
					/>
					{errors.email && (
						<span className="text-red-500 text-[14px]">
							This field is required
						</span>
					)}
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<div className="flex  items-center input gap-3">
						<input
							type={see ? 'text' : 'password'}
							placeholder="*******"
							className="flex w-full text-[16px] font-normal placeholder:text-gray border outline-none border-none"
							{...register('password', { required: true })}
						/>
						{see ? (
							<EyeSlashIcon
								className="icon shrink-0"
								onClick={() => setSee(!see)}
							/>
						) : (
							<EyeIcon className="icon shrink-0" onClick={() => setSee(!see)} />
						)}
					</div>
					{errors.password && (
						<span className="text-red-500 text-[14px]">
							This field is required
						</span>
					)}
					<p className="text-gray mt-2">Lost your password?</p>
				</div>
				<div className="flex flex-col items-center gap-2">
					<button className="btn-lg" type="submit">
						Login In
					</button>
					<p className="text-gray">
						Don&apos;t have account?
						<Link href="/register">
							<span className="pl-1 hover:font-bold hover:text-black">
								Register here
							</span>
						</Link>
					</p>
				</div>
			</form>
		</div>
	)
}
