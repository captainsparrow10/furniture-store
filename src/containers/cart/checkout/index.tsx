'use client'
import { useUpdateUserAdress } from '@/hooks/useMutation'
import { useCart, usePriceCart, useUserCart } from '@/hooks/useQuery'
import { CartType } from '@/types/cart'
import { ProfileInputs } from '@/types/input'
import { addressSchema } from '@/validations/addressSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function CheckOutForm() {
	const cart = useCart()
	const price = usePriceCart()
	const user = useUserCart()

	const updateUserAdress = useUpdateUserAdress()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProfileInputs>({
		resolver: zodResolver(addressSchema),
	})
	const onSubmit = handleSubmit(async (data: ProfileInputs) => {
		if (
			data.country &&
			data.street &&
			data.province &&
			data.zipcode &&
			data.phone
		) {
			const req = {
				company: data.company,
				country: data.country,
				province: data.province,
				street: data.street,
				zipcode: data.zipcode,
				phone: data.phone,
			}
			updateUserAdress.mutate(req)
		}
	})

	return (
		<form
			className="flex flex-wrap justify-center gap-24 px-6 lg:px-12 py-16 3xl:px-24"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col gap-y-9 max-w-[423px] w-full">
				<h3>Billing Details</h3>
				<div className="flex gap-x-9">
					<div className="w-1/2">
						<h5>first name</h5>
						<input
							type="text"
							className="input"
							placeholder="John"
							defaultValue={user.data && user.data.firstname}
							disabled
						/>
					</div>
					<div className="w-1/2">
						<h5>last name</h5>
						<input
							type="text"
							className="input"
							placeholder="Doe"
							defaultValue={user.data && user.data.lastname}
							disabled
						/>
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
						defaultValue={user.data?.company && user.data.company}
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
						defaultValue={user.data?.country && user.data.country}
					/>
					{errors.country?.message && (
						<span className="text-red-500 text-[14px]">
							{errors.country?.message}
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
						defaultValue={user.data?.street && user.data.street}
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
						defaultValue={user.data?.province && user.data.province}
					/>
					{errors.province?.message && (
						<span className="text-red-500 text-[14px]">
							{errors.province?.message}
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
						defaultValue={user.data?.zipcode && user.data.zipcode}
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
						defaultValue={user.data?.phone && user.data.phone}
					/>
					{errors.phone?.message && (
						<span className="text-red-500 text-[14px]">
							{errors.phone?.message}
						</span>
					)}
				</div>
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
									<span className="font-bold"> x {item.amount}</span>
								</h5>
								<h5> {parseFloat(item.price) * item.amount}</h5>
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
