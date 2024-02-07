'use client'
import AlertStatus from '@/components/alert'
import { profileSchema } from '@validations/profileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ProfileInputs } from '@/types/input'
import { MessageAlertType } from '@/types/alert'
import { useUserCart } from '@/hooks/useQuery'
import { useUpdateProfileData } from '@/hooks/useMutation'
import ProfileService from '@/services/user/profile'
import { ProfileType } from '@/types/user'
import { useQuery } from '@tanstack/react-query'
type Props = {
	profileData: ProfileType
}

export default function ProfileForm({ profileData }: Props) {
	const [viewAlert, setViewAlert] = useState(false)
	const [message, setMessage] = useState<MessageAlertType | undefined>()
	const handleViewAlert = () => {
		setViewAlert(false)
	}
	const user = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const data: ProfileType = await ProfileService.getProfile()
			return data
		},
		initialData: profileData,
	})
	const updateUser = useUpdateProfileData()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProfileInputs>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			...user.data,
		},
	})
	const onSubmit = handleSubmit(async (data: ProfileInputs) => {
		const res: MessageAlertType = await ProfileService.putProfile({ ...data })
		if (res.status) {
			setMessage({
				statusText: res.statusText,
				status: res.status,
			})
			setViewAlert(true)
			if (res.status === 200) {
				updateUser.mutate()
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
			<form
				className="py-16 px-6 flex gap-12 justify-center items-center"
				onSubmit={onSubmit}
			>
				<div className="flex flex-col gap-y-9 max-w-[423px] w-full">
					<h3>Profile</h3>
					<div className="flex gap-x-9">
						<div className="w-1/2">
							<h5>first name</h5>
							<input
								type="text"
								className="input"
								placeholder="John"
								{...register('firstname', { required: true })}
								defaultValue={user.data?.firstname}
							/>
							{errors.firstname?.message && (
								<span className="text-red-500 text-[14px]">
									{errors.firstname?.message}
								</span>
							)}
						</div>
						<div className="w-1/2">
							<h5>last name</h5>
							<input
								type="text"
								className="input"
								placeholder="Doe"
								defaultValue={user.data?.lastname}
								{...register('lastname', { required: true })}
							/>
							{errors.lastname?.message && (
								<span className="text-red-500 text-[14px]">
									{errors.lastname?.message}
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
							{...register('company', { required: false })}
							defaultValue={user.data?.company}
						/>
						{errors.company?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.company?.message}
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>country / region</h5>
						<input
							type="text"
							className="input"
							placeholder="Mexico"
							{...register('country', { required: true })}
							defaultValue={user.data?.country}
						/>
						{errors.country?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.country.message}
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
							defaultValue={user.data?.street}
						/>
						{errors.street?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.street?.message}
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
							defaultValue={user.data?.province}
						/>
						{errors.province?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.province.message}
							</span>
						)}
					</div>
					<div className="input-space">
						<h5>ZIP code</h5>
						<input
							type="text"
							className="input"
							placeholder="1234"
							{...register('zipcode', { required: true })}
							defaultValue={user.data?.zipcode}
						/>
						{errors.zipcode?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.zipcode?.message}
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
							defaultValue={user.data?.phone}
						/>
						{errors.phone?.message && (
							<span className="text-red-500 text-[14px]">
								{errors.phone?.message}
							</span>
						)}
					</div>
					<div className="flex justify-center">
						<button className="btn-lg" type="submit">
							Update Data
						</button>
					</div>
				</div>
			</form>
		</>
	)
}
