'use client'
import { CartInterface } from '@/utils/Interfaces'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CheckOutComponent() {
	const [totalPrice, setTotalPrice] = useState(0)
	const handlePrice = (cartItems: CartInterface[]) => {
		let subPrice, totalPrice
		if (Array.isArray(cartItems) && cartItems.length > 0) {
			subPrice = cartItems.map((item) => item.amount * parseFloat(item.price))
			totalPrice = subPrice.reduce((total, value) => total + value, 0)
			setTotalPrice(totalPrice)
		} else if (cartItems && cartItems.length === 1) {
			totalPrice = parseFloat(cartItems[0].price)
			setTotalPrice(totalPrice)
		} else {
			setTotalPrice(0)
		}
	}
	const cartProductsPrueba = useQuery({
		queryKey: ['cart'],
		queryFn: async () => {
			const response = await fetch('http://localhost:3000/api/cart')
			const data: CartInterface[] = await response.json()
			handlePrice(data)
			return data
		},
	})
	const total = (totalPrice + totalPrice * 0.07).toFixed(2)
	return (
		<div className="flex justify-center py-16 gap-x-24">
			<div className="flex flex-col gap-y-9 w-[423px]">
				<h3>Billing Details</h3>
				<div className="flex gap-x-9">
					<div className="w-1/2">
						<h5>first name</h5>
						<input type="text" className="input" placeholder="John" />
					</div>
					<div className="w-1/2">
						<h5>last name</h5>
						<input type="text" className="input" placeholder="Doe" />
					</div>
				</div>
				<div className="input-space">
					<h5>
						company name <span className="text-gray">(Optional)</span>
					</h5>
					<input type="text" className="input" placeholder="Example company" />
				</div>
				<div className="input-space">
					<h5>country / region</h5>
					<input type="text" className="input" placeholder="Mexico" />
				</div>
				<div className="input-space">
					<h5>Street address</h5>
					<input type="text" className="input" placeholder="Mexico city" />
				</div>
				<div className="input-space">
					<h5>Province</h5>
					<input type="text" className="input" placeholder="Mexico" />
				</div>
				<div className="input-space">
					<h5>ZIP code</h5>
					<input type="text" className="input" placeholder="1234" />
				</div>
				<div className="input-space">
					<h5>Phone</h5>
					<input type="text" className="input" placeholder="+507 12345678" />
				</div>
				<div className="input-space">
					<h5>email address</h5>
					<input
						type="email"
						className="input"
						placeholder="example@gmail.com"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-9 w-[423px]">
				<div className="flex justify-between">
					<h4>Products</h4>
					<h4>Price</h4>
				</div>
				<div className="flex flex-col gap-y-2">
					{cartProductsPrueba.data &&
						cartProductsPrueba.data.map((item) => (
							<div className="flex justify-between">
								<h5 className="text-gray">
									{item.name}
									<span className="font-bold"> x {item.amount}</span>
								</h5>
								<h5> {parseFloat(item.price) * item.amount}</h5>
							</div>
						))}
					<div className="flex justify-between">
						<h5 className=" text-gray">ITBMS</h5>
						<h5>{(totalPrice * 0.07).toFixed(2)}</h5>
					</div>
				</div>
				<div className="flex justify-between">
					<h5>total</h5>
					<h5 className="font-bold">$ {total}</h5>
				</div>
				<div className="flex flex-col items-center gap-y-6">
					<div className="line" />
					<p>
						Your personal data will be used to support your experience
						throughout this website, to manage access to your account, and for
						other purposes described in our privacy policy.
					</p>
					<Link href="/cart/checkout/send">
						<button className="btn-lg">Place order</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
