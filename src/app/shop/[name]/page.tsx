import UrlIndications from '@/UI/Components/Navegation/UrlIndications'
import ContentImage from '@/UI/Pages/Shop/single product/ContentImage'
import { shopItemsInterface } from '@/utils/Interfaces'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { headers } from 'next/headers'

export default async function SingleProduct() {
	const heads = headers()
	const pathname = heads.get('next-url')
	const id = pathname?.replace('/shop/', '')
	console.log(id)
	const res = await fetch(`http://localhost:3000/api/shop/${id}`)
	const shopItem: shopItemsInterface = await res.json()
	return (
		<main>
			<UrlIndications />
			<div className="py-12 px-6">
				<ContentImage shopItem={shopItem} />
			</div>
		</main>
	)
}
