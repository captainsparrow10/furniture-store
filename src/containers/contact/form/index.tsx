'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContactSchedule from '../schedule'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/validations/contactSchema'
import Input from '@/components/input'
import TextArea from '@/components/input/area'
import { useAlert } from '@/lib/alerts'

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
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: zodResolver(contactSchema),
	})
	const alertStatus = useAlert((state) => state.changeStatus)
	const onSubmit = handleSubmit(async (data: Inputs) => {
		alertStatus('Data Send', 200)
		reset()
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
					<Input
						register={register}
						label="name"
						valueInput="name"
						errors={errors}
						placeholder="John Doe"
						type="text"
					/>
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
						label="subject"
						valueInput="subject"
						errors={errors}
						placeholder="This is optional"
						type="text"
						optional={true}
					/>
					<TextArea
						placeholder="Hi! I'd like to ask about"
						register={register}
						errors={errors}
						valueInput="message"
						label="message"
					></TextArea>

					<button className="btn-lg" type="submit">
						submit
					</button>
				</form>
			</div>
		</div>
	)
}
