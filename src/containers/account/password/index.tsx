'use client'
import Input from '@/components/input'
import { useAlert } from '@/lib/alerts'
import RegisterService from '@/services/user/register'
import { MessageAlertType } from '@/types/alert'
import { LostPasswordInputs } from '@/types/input'
import { lostPasswordSchema } from '@/validations/lostPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function PasswordForm() {
	const alertStatus = useAlert((state) => state.changeStatus)
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
			alertStatus(res.statusText, res.status)
			if (res.status == 200) {
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
				<h3>Change Password</h3>
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
				<Input
					register={register}
					label="confirm Password"
					valueInput="confirmPassword"
					errors={errors}
					placeholder="********"
					type="password"
				/>
				<div className="flex justify-center">
					<button className="btn-lg" type="submit">
						Change Password
					</button>
				</div>
			</form>
		</div>
	)
}
