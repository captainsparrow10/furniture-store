'use client'
import { insertUser } from '@/lib/server/UserServer'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
type Inputs = {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
}

export default function RegisterForm() {
	const [see1, setSee1] = useState(false)
	const [see2, setSee2] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit = handleSubmit(async (data: Inputs) => {
		if (data.confirmPassword == data.password) {
			const res = await insertUser(data)
			if (res) {
				router.push('/login')
			}
		}
	})
	return (
		<div className="py-16 px-6 flex gap-12 justify-center items-center">
			<form
				className="flex flex-col justify-between w-full max-w-[350px] gap-4"
				onSubmit={onSubmit}
			>
				<h3>Register</h3>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						placeholder="John"
						className="input"
						{...register('firstName', { required: true })}
					/>
					{errors.firstName && (
						<span className="text-red-500 text-[14px]">
							This field is required
						</span>
					)}
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						placeholder="Doe"
						className="input"
						{...register('lastName', { required: true })}
					/>
					{errors.lastName && (
						<span className="text-red-500 text-[14px]">
							This field is required
						</span>
					)}
				</div>
				<div>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						placeholder="example@gmail.com"
						className="input"
						{...register('email', { required: true })}
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
							type={see1 ? 'text' : 'password'}
							placeholder="*******"
							className="flex w-full text-[16px] font-normal placeholder:text-gray border outline-none border-none"
							{...register('password', { required: true })}
						/>
						{see1 ? (
							<EyeSlashIcon
								className="icon shrink-0"
								onClick={() => setSee1(!see1)}
							/>
						) : (
							<EyeIcon
								className="icon shrink-0"
								onClick={() => setSee1(!see1)}
							/>
						)}
					</div>
					{errors.password && (
						<span className="text-red-500 text-[14px]">
							This field is required
						</span>
					)}
				</div>
				<div>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<div className="flex  items-center input gap-3">
						<input
							type={see2 ? 'text' : 'password'}
							placeholder="********"
							className="flex w-full text-[16px] font-normal placeholder:text-gray border outline-none border-none"
							{...register('confirmPassword', { required: true })}
						/>
						{see2 ? (
							<EyeSlashIcon
								className="icon shrink-0"
								onClick={() => setSee2(!see2)}
							/>
						) : (
							<EyeIcon
								className="icon shrink-0"
								onClick={() => setSee2(!see2)}
							/>
						)}
					</div>
					{errors.confirmPassword && (
						<span className="text-red-500 text-[14px]">
							This field is required
						</span>
					)}
				</div>
				<div className="flex justify-center">
					<button className="btn-lg" type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	)
}
