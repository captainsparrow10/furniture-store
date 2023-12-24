
import React from 'react'
type Props = {
	product: any
}
export default function NewPick({ product }: Props) {

	return (
		<div className="flex px-6 py-6 bg-cream justify-center flex-wrap items-center h-[700px]">
			<div className="relative w-full max-w-[400px] h-3/5 lg:h-full">
				<img src={product.colors.urlList} alt={product.name} className="w-full h-full" />
			</div>

			<div className="w-fit h-2/5 lg:h-fit flex flex-col gap-3 justify-center  items-center text-center">
				<div className="w-full max-w-[350px]">
					<h4 className="text-center">New Arrivals</h4>
					<h2>{product.name}</h2>
				</div>
				<button className="btn-lg rounded-none">Order Now</button>
			</div>
		</div>
	)
}
