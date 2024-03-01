'use client'

import AlertStatus from '@/components/alert'
import Input from '@/components/input'
import { useAlert } from '@/lib/alerts'
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
	const alertStatus = useAlert((state) => state.changeStatus)
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
			alertStatus('Sign In...', res.status)
			userCart.mutate()
			router.push('/')
		}

		if (res?.error) {
			alertStatus(res.error, res.status)
		}
	})

	const userCart = useMutation({
		onMutate: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})
	return (
		<div className="py-16 px-6 flex gap-12 justify-center items-center">
			<form
				className="flex flex-col gap-4 w-full max-w-[350px]  h-[380px]"
				onSubmit={onSubmit}
			>
				<h3>Login</h3>
				<Input
					register={register}
					label="email"
					valueInput="email"
					errors={errors}
					placeholder="example@gmail.com"
					type="email"
				/>
				<Input
					register={register}
					label="password"
					valueInput="password"
					errors={errors}
					placeholder="********"
					type="password"
				/>
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
