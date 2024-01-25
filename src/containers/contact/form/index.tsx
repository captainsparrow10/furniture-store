'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContactSchedule from '../schedule'

type Inputs = {
	name: string
	email: string
	subject: string
	message: string
}
export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit = handleSubmit(async (data: Inputs) => {
		if (data && data.email && data.name && data.subject && data.message) {
			console.log(data)
		}
	})

	return (
		<div className="py-24 flex flex-col justify-center h-full w-full gap-y-24 items-center px-3 sm:px-6 lg:px-12 3xl:px-24">
			<div className="max-w-[644px] w-full flex flex-col items-center">
				<h3>Get in touch with us</h3>
				<p className="body2 text-center text-gray">
					For More Information About Our Product & Services. Please Feel Free To
					Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
					Hesitate!
				</p>
			</div>
			<div className="flex flex-wrap px-3 sm:px-6  gap-6 w-full justify-center">
				<ContactSchedule />
				<form
					className="flex flex-col gap-y-6 max-w-[423px] w-full"
					onSubmit={onSubmit}
				>
					<div className="input-space">
						<h5>Name</h5>
						<input
							type="text"
							className="input"
							placeholder="John Doe"
							{...register('name', { required: true })}
						/>
						{errors.name && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>Email</h5>
						<input
							type="email"
							className="input"
							placeholder="example@gmail.com"
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>Subject</h5>
						<input
							type="text"
							className="input"
							placeholder="This is optional"
							{...register('subject', { required: true })}
						/>
						{errors.subject && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>Message</h5>
						<textarea
							className="input h-[200px]"
							placeholder="Hi! I'd like to ask about"
							{...register('message', { required: true })}
						/>
						{errors.message && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<button className="btn-lg" type="submit">
						submit
					</button>
				</form>
			</div>
		</div>
	)
}
