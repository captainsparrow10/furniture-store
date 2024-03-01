'use client'
import AlertStatus from '@/components/alert'
import Input from '@/components/input'
import { useCheckOut } from '@/hooks/useMutation'
import { usePriceCart } from '@/hooks/useQuery'
import { useAlert } from '@/lib/alerts'
import CartService from '@/services/cart'
import ProfileService from '@/services/user/profile'
import { MessageAlertType } from '@/types/alert'
import { CartType } from '@/types/cart'
import { ProfileInputs } from '@/types/input'
import { ProfileType } from '@/types/user'
import { addressSchema } from '@/validations/addressSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
	userProfile: ProfileType
	userCart: CartType[]
}

export default function CheckOutForm({ userProfile, userCart }: Props) {
	const router = useRouter()
	const cart = useQuery({
		queryKey: ['cart'],
		queryFn: async () => {
			const data: CartType[] = await CartService.cartProductsUserId()
			return data
		},
		initialData: userCart,
	})
	const price = usePriceCart()
	const user = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const data: ProfileType = await ProfileService.getProfile()
			return data
		},
		initialData: userProfile,
	})

	const updateCheckOut = useCheckOut()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProfileInputs>({
		resolver: zodResolver(addressSchema),
		defaultValues: {
			...user.data,
		},
	})
	const alertStatus = useAlert((state) => state.changeStatus)
	const onSubmit = handleSubmit(async (data: ProfileInputs) => {
		const res: MessageAlertType = await ProfileService.putProfile({ ...data })
		alertStatus(res.statusText, res.status)
		if (res.status === 200) {
			updateCheckOut.mutate()
			router.push('/cart/checkout/send')
		}
	})

	return (
		<form
			className="flex flex-wrap justify-center gap-24 px-6 lg:px-12 py-16 3xl:px-24"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col gap-y-9 max-w-[423px] w-full">
				<h3>Billing Details</h3>
				<div className="flex gap-6">
					<Input
						register={register}
						label="first name"
						valueInput="firstname"
						errors={errors}
						placeholder="John"
						type="text"
						disable = {true}
					/>
					<Input
						register={register}
						label="last name"
						valueInput="lastname"
						errors={errors}
						placeholder="Doe"
						type="text"
						disable = {true}
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
			</div>
			<div className="flex flex-col gap-y-9 max-w-[423px] w-full">
				<div className="flex justify-between">
					<h4>Products</h4>
					<h4>Price</h4>
				</div>
				<div className="flex flex-col gap-y-2">
					{cart.data &&
						cart.data.map((item: CartType) => (
							<div className="flex justify-between" key={item.productid}>
								<h5 className="text-gray">
									{item.name}
									<span className="font-bold text-sm"> x {item.amount}</span>
								</h5>
								<h5> {(parseFloat(item.price) * item.amount).toFixed(2)}</h5>
							</div>
						))}
					<div className="flex justify-between">
						<h5 className=" text-gray">ITBMS</h5>
						<h5>{price.data && (price.data * 0.07).toFixed(2)}</h5>
					</div>
				</div>
				<div className="flex justify-between">
					<h5>total</h5>
					<h5 className="font-bold">
						$ {price.data && (price.data + price.data * 0.07).toFixed(2)}
					</h5>
				</div>
				<div className="flex flex-col items-center gap-y-6">
					<div className="line" />
					<p>
						Your personal data will be used to support your experience
						throughout this website, to manage access to your account, and for
						other purposes described in our privacy policy.
					</p>
					<button className="btn-lg" type="submit">
						Place order
					</button>
				</div>
			</div>
		</form>
	)
}
