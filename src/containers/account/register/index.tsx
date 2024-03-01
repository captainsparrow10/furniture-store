'use client'
import { registerSchema } from '@validations/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { MessageAlertType } from '@/types/alert'
import { RegisterInputs } from '@/types/input'
import { RegisterType } from '@/types/user'
import RegisterService from '@/services/user/register'
import { useAlert } from '@/lib/alerts'
import Input from '@/components/input'
import Link from 'next/link'

export default function RegisterForm() {
	const alertStatus = useAlert((state) => state.changeStatus)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors }, getValues,
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
				<h3>Register</h3>
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
				<div className="flex flex-col items-center gap-2">
					<button className="btn-lg" type="submit">
						Login In
					</button>
					<p className="text-gray">
						Do you have account?
						<Link href="/login">
							<span className="pl-1 hover:font-bold hover:text-black">
								login here
							</span>
						</Link>
					</p>
				</div>
			</form>
		</div>
	)
}
