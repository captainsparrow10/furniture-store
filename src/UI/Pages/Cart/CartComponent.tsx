'use client'
import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import { cartProducts } from '@/app/server'
import {
	CartInterface,
	ShopItemSelectedInterface,
	shopSingleItemInterface,
} from '@/utils/Interfaces'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
type Props = {
	cartItems: CartInterface[]
}
export default function CartComponent({ cartItems }: Props) {
	const subPrice = cartItems.map((item) => item.amount * parseFloat(item.price))
	const totalPrice = subPrice.reduce((total, value) => total + value, 0)
	const total = totalPrice + totalPrice * 0.07
	const queryClient = useQueryClient()
	const cartProductsPrueba = useQuery({
		queryKey: ['cart'],
		queryFn: async () => {
			const response = await fetch("http://localhost:3000/api/cart")
			return await response.json()
		},
	})


	return (
		<div className="py-16 flex justify-center flex-wrap gap-x-9">
			<div className="input-space">
				<div className="grid grid-cols-12 gap-5 w-[817px] bg-cream py-3">
					<h5 className=" font-bold col-span-5 flex justify-center">Product</h5>
					<h5 className=" font-bold col-span-2 flex justify-center">Price</h5>
					<h5 className=" font-bold col-span-2 flex justify-center">
						Quantity
					</h5>
					<h5 className=" font-bold col-span-2 flex justify-center">Total</h5>
				</div>
				{cartProductsPrueba.isLoading && <span>Loading...</span>}
				{cartProductsPrueba.isError && <span>Data not found</span>}
				{cartProductsPrueba.data &&
					cartProductsPrueba.data.map((item: CartInterface) => (
						<div
							className="grid grid-cols-12 gap-5 h-[106px] w-[817px]"
							key={item.id_product}
						>
							<div className="col-span-2 w-full h-[106px] bg-cream rounded-xl">
								<img
									src={item.image}
									alt={item.name}
									className="w-full h-full"
								/>
							</div>
							<h5 className="col-span-3 h-full flex justify-center items-center  text-gray">
								{item.name}
							</h5>
							<h5 className="col-span-2 h-full flex justify-center items-center  text-gray">
								${item.price}
							</h5>
							<div className="col-span-2 h-full flex justify-center items-center">
								<h5 className="h-8 w-8 rounded-xl border border-gray  flex justify-center items-center">
									{item.amount}
								</h5>
							</div>
							<h5 className="col-span-2 h-full flex justify-center items-center text-gray">
								{item.amount * parseFloat(item.price)}
							</h5>
							<div className=" col-span-1 flex justify-center items-center">
								<TrashIcon className="icon text-gray hover:text-black" />
							</div>
						</div>
					))}
			</div>
			<div className="bg-cream px-12 py-6 flex flex-col items-center w-[393px] gap-y-12 h-fit">
				<h3>Car Total</h3>
				<div className="flex flex-col w-full gap-y-6">
					<div className="flex flex-col w-full gap-y-3">
						<div className="flex justify-between w-full">
							<h5>Sub Total</h5>
							<h5 className="text-gray">{totalPrice}</h5>
						</div>
						<div className="flex justify-between w-full">
							<h5>ITBMS</h5>
							<h5 className="text-gray">7%</h5>
						</div>
					</div>
					<div className="flex justify-between w-full">
						<h5>Total</h5>
						<h5 className="font-bold">{total.toFixed(2)}</h5>
					</div>
				</div>
				<button className="btn-lg">Check Out</button>
			</div>
		</div>
	)
}
