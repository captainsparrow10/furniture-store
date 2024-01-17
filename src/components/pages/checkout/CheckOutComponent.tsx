'use client'
import { CartInterface } from '@/lib/Interfaces/CartInterface'
import { useUpdateUserAdress } from '@/lib/hook/useMutation'
import { useCart, usePriceCart, useUserCart } from '@/lib/hook/useQuery'
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
export default function CheckOutComponent() {
	const cart = useCart()
	const price = usePriceCart()
	const user = useUserCart()

	const updateUserAdress = useUpdateUserAdress()

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
			const req = {
				companyName: data.companyName,
				country: data.country,
				province: data.province,
				street: data.street,
				zipCode: data.zipCode,
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
			</div>
			<div className="flex flex-col gap-y-9 max-w-[423px] w-full">
				<div className="flex justify-between">
					<h4>Products</h4>
					<h4>Price</h4>
				</div>
				<div className="flex flex-col gap-y-2">
					{cart.data &&
						cart.data.map((item: CartInterface) => (
							<div className="flex justify-between" key={item.productId}>
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
