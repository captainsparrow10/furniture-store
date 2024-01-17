'use client'
import SuccessAlert from '@/components/Alert/SuccessAlert'
import { useUserCart } from '@/lib/hook/useQuery'
import Services from '@/lib/services/Services'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
	firstName: string
	lastName: string
	companyName?: string
	country: string
	street: string
	province: string
	zipCode: string
	phone: string
}

export default function ProfileForm() {
	const [view, setView] = useState(false)

	const handleChangeView = (value: boolean) => {
		setView(value)
	}

	const user = useUserCart()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit = handleSubmit(async (data: Inputs) => {
		if (
			data &&
			data.firstName &&
			data.lastName &&
			data.country &&
			data.street &&
			data.province &&
			data.zipCode &&
			data.phone
		) {
			const res = await Services.user.updateProfile({ ...data })
			if (res === 200) {
				setView(true)
			}
		}
	})
	return (
		<>
			{view && (
				<SuccessAlert
					handleChangeView={handleChangeView}
				/>
			)}
			<div className="py-16 px-6 flex gap-12 justify-center items-center">
				<form
					className="flex flex-col gap-y-9 max-w-[423px] w-full"
					onSubmit={onSubmit}
				>
					<h3>Profile</h3>
					<div className="flex gap-x-9">
						<div className="w-1/2">
							<h5>first name</h5>
							<input
								type="text"
								className="input"
								placeholder="John"
								{...register('firstName', { required: true })}
								defaultValue={user.data && user.data.firstName}
							/>
							{errors.firstName && (
								<span className="text-red-500 text-[14px]">
									This field is required
								</span>
							)}
						</div>
						<div className="w-1/2">
							<h5>last name</h5>
							<input
								type="text"
								className="input"
								placeholder="Doe"
								defaultValue={user.data && user.data.lastName}
								{...register('lastName', { required: true })}
							/>
							{errors.lastName && (
								<span className="text-red-500 text-[14px]">
									This field is required
								</span>
							)}
						</div>
					</div>
					<div className="input-space">
						<h5>
							company name <span className="text-gray">(Optional)</span>
						</h5>
						<input
							type="text"
							className="input"
							placeholder="Example company"
							{...register('companyName', { required: false })}
							defaultValue={user.data && user.data.adress[0].companyName}
						/>
					</div>
					<div className="input-space">
						<h5>country / region</h5>
						<input
							type="text"
							className="input"
							placeholder="Mexico"
							{...register('country', { required: true })}
							defaultValue={user.data && user.data.adress[0].country}
						/>
						{errors.country && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>Street address</h5>
						<input
							type="text"
							className="input"
							placeholder="Mexico city"
							{...register('street', { required: true })}
							defaultValue={user.data && user.data.adress[0].street}
						/>
						{errors.street && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>Province</h5>
						<input
							type="text"
							className="input"
							placeholder="Mexico"
							{...register('province', { required: true })}
							defaultValue={user.data && user.data.adress[0].province}
						/>
						{errors.province && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>ZIP code</h5>
						<input
							type="text"
							className="input"
							placeholder="1234"
							{...register('zipCode', { required: true })}
							defaultValue={user.data && user.data.adress[0].zipCode}
						/>
						{errors.zipCode && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>Phone</h5>
						<input
							type="text"
							className="input"
							placeholder="+507 12345678"
							{...register('phone', { required: true })}
							defaultValue={user.data && user.data.adress[0].phone}
						/>
						{errors.phone && (
							<span className="text-red-500 text-[14px]">
								This field is required
							</span>
						)}
					</div>
					<div className="flex justify-center">
						<button className="btn-lg" type="submit">
							Update Data
						</button>
					</div>
				</form>
			</div>
		</>
	)
}
