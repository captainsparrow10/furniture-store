'use client'

import AlertStatus from '@/components/alert'
import { MessageAlertType } from '@/types/alert'
import { LoginInputs } from '@/types/input'
import { loginSchema } from '@/validations/loginSchema'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
	const [see, setSee] = useState(false)
	const [viewAlert, setViewAlert] = useState(false)
	const [message, setMessage] = useState<MessageAlertType | undefined>()
	const handleViewAlert = () => {
		setViewAlert(false)
	}
	const router = useRouter()
	const queryClient = useQueryClient()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>({
		resolver: zodResolver(loginSchema),
	})
	const onSubmit = handleSubmit(async (data: LoginInputs, e: any) => {
		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		})
		if (res?.status == 200) {
			userCart.mutate()
			router.push('/')
		}
		if (res?.error) {
			console.log(res)
			setViewAlert(true)
			setMessage({
				status: res.status,
				statusText: res.error,
			})
		}
	})

	const userCart = useMutation({
		onMutate: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
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
								<EyeIcon
									className="icon shrink-0"
									onClick={() => setSee(!see)}
								/>
							)}
						</div>
						{errors.password?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.password?.message}
							</span>
						)}
						<Link href="/lostpassword">
							<p className="text-gray mt-2">Lost your password?</p>
						</Link>
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
		</>
	)
}
