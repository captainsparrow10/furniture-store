'use client'
import DeleteAlert from '@/components/Alert/DeleteAlert'
import { CartInterface } from '@/lib/Interfaces/CartInterface'
import { useUpdateItemCart, useDeleteItemCart } from '@/lib/hook/useMutation'
import { useCart, usePriceCart } from '@/lib/hook/useQuery'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CartComponent() {
	// variables
	const [view, setView] = useState(false)

	const handleChangeView = (value: boolean) => {
		setView(value)
	}

	//Query
	const cartProducts = useCart()
	const price = usePriceCart()
	const deleteItem = useDeleteItemCart()
	const updateItem = useUpdateItemCart()
	
	useEffect(() => {
		if (deleteItem.isSuccess) {
			setView(true)
		}
	}, [deleteItem.isSuccess])
	

	return (
		<>
			{view && <DeleteAlert handleChangeView={handleChangeView} />}
			<div className="px-6 lg:px-12 py-16 3xl:px-24  flex justify-center flex-wrap gap-9">
				<div className="input-space w-fit overflow-hidden overflow-x-scroll lg:overflow-x-hidden">
					<div className="grid grid-cols-12 gap-5 w-[817px] bg-cream py-3">
						<h5 className=" font-bold col-span-5 flex justify-center">
							Product
						</h5>
						<h5 className=" font-bold col-span-2 flex justify-center">Price</h5>
						<h5 className=" font-bold col-span-2 flex justify-center">
							Quantity
						</h5>
						<h5 className=" font-bold col-span-2 flex justify-center">Total</h5>
					</div>
					{cartProducts.isLoading && <span>Loading...</span>}
					{cartProducts.isError && <span>Data not found</span>}
					{cartProducts.data &&
						cartProducts.data.map((item: CartInterface) => (
							<div
								className="grid grid-cols-12 gap-5 h-[106px] w-[817px]"
								key={item.productId}
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
												productId: item.productId,
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
												productId: item.productId,
											}
											updateItem.mutate(params)
										}}
									>
										<MinusIcon className="h-4 w-4 text-black" />
									</button>
								</div>
								<h5 className="col-span-2 h-full flex justify-center items-center text-gray">
									{(item.amount * parseFloat(item.price)).toFixed(2)}
								</h5>
								<div className=" col-span-1 flex justify-center items-center">
									<TrashIcon
										className="icon text-gray hover:text-black"
										onClick={() => {
											deleteItem.mutate(item.productId)
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
								<h5 className="text-gray">{price.data?.toFixed(2)}</h5>
							</div>
							<div className="flex justify-between w-full">
								<h5>ITBMS</h5>
								<h5 className="text-gray">7%</h5>
							</div>
						</div>
						<div className="flex justify-between w-full">
							<h5>Total</h5>
							<h5 className="font-bold">
								{price.data && (price.data + price.data * 0.07).toFixed(2)}
							</h5>
						</div>
					</div>
					<Link href="/cart/checkout">
						<button className="btn-lg">Check Out</button>
					</Link>
				</div>
			</div>
		</>
	)
}
