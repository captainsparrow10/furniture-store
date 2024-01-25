'use client'
import AlertStatus from '@/components/alert'
import { registerSchema } from '@validations/registerSchema'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MessageAlertType } from '@/types/alert'
import { RegisterInputs } from '@/types/input'
import { RegisterType } from '@/types/user'
import RegisterService from '@/services/user/register'

export default function RegisterForm() {
	const [see1, setSee1] = useState(false)
	const [see2, setSee2] = useState(false)
	const [viewAlert, setViewAlert] = useState(false)
	const [message, setMessage] = useState<MessageAlertType | undefined>()
	const handleViewAlert = () => {
		setViewAlert(false)
	}
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInputs>({
		resolver: zodResolver(registerSchema),
	})
	const onSubmit = handleSubmit(async (data: RegisterInputs) => {
		if (data.confirmPassword == data.password) {
			const user: RegisterType = {
				email: data.email,
				firstname: data.firstname,
				lastname: data.lastname,
				password: data.password,
			}
			const res: MessageAlertType = await RegisterService.createUser(user)
			if (res.status == 200) {
				router.push('/login')
			}
			if (res.status == 404 || res.status == 400) {
				setViewAlert(true)
				setMessage(res)
			}
		}
	})
	return (
		<>
			{viewAlert && message && (
				<AlertStatus
					title={message.statusText}
					status={message.status}
					changeView={handleViewAlert}
				/>
			)}
			<div className="py-16 px-6 flex gap-12 justify-center items-center">
				<form
					className="flex flex-col justify-between w-full max-w-[350px] gap-4"
					onSubmit={onSubmit}
				>
					<h3>Register</h3>
					<div>
						<label htmlFor="firstname">First Name</label>
						<input
							type="text"
							placeholder="John"
							className="input"
							{...register('firstname', { required: true })}
						/>
						{errors.firstname?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.firstname?.message}
							</span>
						)}
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							placeholder="Doe"
							className="input"
							{...register('lastname', { required: true })}
						/>
						{errors.lastname?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.lastname.message}
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
						{errors.email?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.email?.message}
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
						{errors.password?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.password?.message}
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
						{errors.confirmPassword?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.confirmPassword?.message}
							</span>
						)}
						{}
					</div>
					<div className="flex justify-center">
						<button className="btn-lg" type="submit">
							Register
						</button>
					</div>
				</form>
			</div>
		</>
	)
}
