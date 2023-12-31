'use client'

import { CartInterface } from '@/lib/Interfaces/CartInterface'
import { deleteCartProducts, updateCartProducts } from '@/lib/server/CartServer'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
	userId: number
}

export default function CartComponent({ userId }: Props) {
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

	const total = (totalPrice + totalPrice * 0.07).toFixed(2)
	const queryClient = useQueryClient()
	const cartProductsPrueba = useQuery({
		queryKey: ['cart'],
		queryFn: async () => {
			const response = await fetch(
				'/api/cart?id=' + userId
			)
			const data: CartInterface[] = await response.json()
			handlePrice(data)
			return data
		},
	})

	const handleDelete = async (id_product: string) => {
		await deleteCartProducts(id_product, userId)
		return
	}
	const deleteItem = useMutation({
		mutationFn: async (id_product: string) => handleDelete(id_product),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})

	const handleAmount = async (params: {
		amount: number
		type: number
		id_product: string
	}) => {
		const { amount, type, id_product } = params
		if (type == 1) {
			if (99 >= amount) {
				await updateCartProducts(id_product, amount + 1, userId)
				return
			}
		} else if (type == 2) {
			if (amount > 1) {
				await updateCartProducts(id_product, amount - 1, userId)
				return
			}
		}
	}

	const updateItem = useMutation({
		mutationFn: async (params: {
			amount: number
			type: number
			id_product: string
		}) => handleAmount(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] })
		},
	})

	return (
		<div className="px-6 lg:px-12 py-16 3xl:px-24  flex justify-center flex-wrap gap-9">
			<div className="input-space w-fit overflow-hidden overflow-x-scroll lg:overflow-x-hidden">
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
							<div className="col-span-2 relative w-full h-[106px] bg-cream rounded-xl">
								<Image src={item.image} alt={item.name} fill />
							</div>
							<h5 className="col-span-3 h-full flex justify-center items-center  text-gray">
								{item.name}
							</h5>
							<h5 className="col-span-2 h-full flex justify-center items-center  text-gray">
								${item.price}
							</h5>
							<div className="col-span-2 h-full flex justify-center items-center">
								<button
									onClick={() => {
										const params = {
											amount: item.amount,
											type: 1,
											id_product: item.id_product,
										}
										updateItem.mutate(params)
									}}
								>
									<PlusIcon className="h-4 w-4 text-black" />
								</button>
								<h5 className="h-8 w-8 rounded-xl border border-gray  flex justify-center items-center">
									{item.amount}
								</h5>

								<button
									onClick={() => {
										const params = {
											amount: item.amount,
											type: 2,
											id_product: item.id_product,
										}
										updateItem.mutate(params)
									}}
								>
									<MinusIcon className="h-4 w-4 text-black" />
								</button>
							</div>
							<h5 className="col-span-2 h-full flex justify-center items-center text-gray">
								{item.amount * parseFloat(item.price)}
							</h5>
							<div className=" col-span-1 flex justify-center items-center">
								<TrashIcon
									className="icon text-gray hover:text-black"
									onClick={() => {
										deleteItem.mutate(item.id_product)
									}}
								/>
							</div>
						</div>
					))}
			</div>
			<div className="bg-cream px-12 py-6 flex flex-col items-center w-[300px] gap-y-12 h-fit">
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
						<h5 className="font-bold">{total}</h5>
					</div>
				</div>
				<Link href="/cart/checkout">
					<button className="btn-lg">Check Out</button>
				</Link>
			</div>
		</div>
	)
}
