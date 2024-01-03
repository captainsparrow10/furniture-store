import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import CartSideItem from './CartSideItem'
import img from '@public/prueba.svg'
export default function CartSideBar() {
	return (
		<div className="w-[400px] h-fit flex flex-col gap-y-4 p-6 border border-gray-line">
			<div className="flex justify-between items-center">
				<p className="body1 font-bold">Shopping Cart</p>
				<XMarkIcon className="icon text-gray hover:text-black" />
			</div>
			<div className="line" />
			<div className="w-full h-full flex flex-col gap-y-2 py-4">
				<CartSideItem image={img} name="prueba" price="250" quantity="2" />
				<CartSideItem image={img} name="prueba" price="250" quantity="2" />
				<CartSideItem image={img} name="prueba" price="250" quantity="2" />
			</div>
			<div className="flex justify-between items-center">
				<p className="body2">Total</p>
				<p className="body2 font-bold">$ 350</p>
			</div>
			<div className="line" />
			<div className="flex gap-x-4">
				<p className="btn-lg hover:font-bold rounded-4xl">View Cart</p>
				<p className="btn-lg hover:font-bold rounded-4xl">Check Out</p>
			</div>
		</div>
	)
}
