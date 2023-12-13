import UrlIndications from '@/UI/Components/Navegation/UrlIndications'
import ContentImage from '@/UI/Pages/Shop/single product/ContentImage'
import { shopItemsInterface } from '@/utils/Interfaces'
import { StarIcon } from '@heroicons/react/20/solid'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
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
			<div className="py-12 px-6 flex flex-wrap gap-6">
				<ContentImage shopItem={shopItem} />
				<div className='flex flex-col gap-3'>
					<div>
						<h3>{shopItem.name}</h3>
						<h4 className="text-gray">$ {shopItem.price}</h4>
					</div>
					<div className='flex divide-x items-center gap-3'>
						<div className='flex gap-1 items-center'>
							<StarIcon className='h-5 w-5 text-yellow' />
							<h5>5</h5>
						</div>
						<h5 className='pl-2'>n reviews</h5>
					</div>
					<p >{shopItem.description}</p>
				</div>
			</div>
		</main>
	)
}
