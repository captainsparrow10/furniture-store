'use client'
import AlertStatus from '@/components/alert'
import RegisterService from '@/services/user/register'
import { MessageAlertType } from '@/types/alert'
import { LostPasswordInputs } from '@/types/input'
import { lostPasswordSchema } from '@/validations/lostPasswordSchema'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function PasswordForm() {
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
	} = useForm<LostPasswordInputs>({
		resolver: zodResolver(lostPasswordSchema),
	})
	const onSubmit = handleSubmit(async (data: LostPasswordInputs) => {
		if (data.confirmPassword == data.password) {
			const res: MessageAlertType = await RegisterService.changePassword(
				data.email,
				data.password
			)
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
					<h3>Change Password</h3>
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
					</div>
					<div className="flex justify-center">
						<button className="btn-lg" type="submit">
							Change Password
						</button>
					</div>
				</form>
			</div>
		</>
	)
}
