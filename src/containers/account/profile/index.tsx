'use client'
import { profileSchema } from '@validations/profileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ProfileInputs } from '@/types/input'
import { MessageAlertType } from '@/types/alert'
import { useUpdateProfileData } from '@/hooks/useMutation'
import ProfileService from '@/services/user/profile'
import { ProfileType } from '@/types/user'
import { useQuery } from '@tanstack/react-query'
import Input from '@/components/input'
import { useAlert } from '@/lib/alerts'
type Props = {
	profileData: ProfileType
}

export default function ProfileForm({ profileData }: Props) {
	const alertStatus = useAlert((state) => state.changeStatus)
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
		alertStatus(res.statusText, res.status)
		if (res.status === 200) {
			updateUser.mutate()
		}
	})

	return (
		<form
			className="py-16 px-6 flex gap-12 justify-center items-center"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col gap-y-9 max-w-[423px] w-full">
				<h3>Profile</h3>
				<div className="flex gap-6">
					<Input
						register={register}
						label="first name"
						valueInput="firstname"
						errors={errors}
						placeholder="John"
						type="text"
					/>
					<Input
						register={register}
						label="last name"
						valueInput="lastname"
						errors={errors}
						placeholder="Doe"
						type="text"
					/>
				</div>
				<Input
					register={register}
					label="company"
					valueInput="company"
					errors={errors}
					placeholder="your company"
					type="text"
					optional
				/>
				<Input
					register={register}
					label="country / region"
					valueInput="country"
					errors={errors}
					placeholder="mexico"
					type="text"
				/>
				<Input
					register={register}
					label="province"
					valueInput="province"
					errors={errors}
					placeholder="mexico city"
					type="text"
				/>
				<Input
					register={register}
					label="street address"
					valueInput="street"
					errors={errors}
					placeholder="Juarez av"
					type="text"
				/>
				<Input
					register={register}
					label="zid code"
					valueInput="zipcode"
					errors={errors}
					placeholder="1234"
					type="text"
				/>
				<Input
					register={register}
					label="phone"
					valueInput="phone"
					errors={errors}
					placeholder="12345678"
					type="text"
				/>
				<div className="flex justify-center">
					<button className="btn-lg" type="submit">
						Update Data
					</button>
				</div>
			</div>
		</form>
	)
}
