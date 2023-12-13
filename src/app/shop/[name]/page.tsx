import Count from '@/UI/Components/Button/Count'
import UrlIndications from '@/UI/Components/Navegation/UrlIndications'
import ContentImage from '@/UI/Pages/Shop/single product/ContentImage'
import { shopItemsInterface } from '@/utils/Interfaces'
import { StarIcon } from '@heroicons/react/20/solid'

import { headers } from 'next/headers'

export default async function SingleProduct() {
	const heads = headers()
	const pathname = heads.get('next-url')
	const id = pathname?.replace('/shop/', '')
	const res = await fetch(`http://localhost:3000/api/shop/${id}`)
	const shopItem: shopItemsInterface = await res.json()
	return (
		<main>
			<UrlIndications />
			<div className="py-12 px-6 flex flex-wrap gap-6 justify-center">
				<ContentImage shopItem={shopItem} />
				<div className="flex flex-col gap-3 max-w-[450px] w-full">
					<div>
						<h3>{shopItem.name}</h3>
						<h4 className="text-gray">$ {shopItem.price}</h4>
					</div>
					<div className="flex divide-x items-center gap-3">
						<div className="flex gap-1 items-center">
							<StarIcon className="h-5 w-5 text-yellow" />
							<h5>5</h5>
						</div>
						<h5 className="pl-2">n reviews</h5>
					</div>
					<p>{shopItem.description}</p>
					<div className="flex flex-col gap-2">
						<h5>Color</h5>
						<div className="flex gap-3">
							{shopItem.colors.map((color) => (
								<span
									className={`icon rounded-full`}
									style={{ backgroundColor: color.name }}
									key={color._id}
								></span>
							))}
						</div>
					</div>
					<div className="flex gap-3 flex-wrap mt-4">
						<Count number={1} />
						<button className="btn-lg">Add to cart</button>
					</div>
					<div className="line my-6" />
					<div className="flex flex-col gap-3">
						<div className="flex gap-2">
							<p className="text-gray">SKU:</p>
							<p className="text-gray">{shopItem._id}</p>
						</div>
						<div className="flex gap-1">
							<p className="text-gray">Tags:</p>
							{shopItem.tags.map((tag, index) => (
								<p className="text-gray capitalize" key={tag._id}>
									{tag.name}
									{index !== shopItem.tags.length - 1 ? ',' : ''}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
