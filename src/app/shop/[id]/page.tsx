
import UrlIndications from '@/components/navegation/UrlIndications'
import ContentProduct from '@/components/pages/shop/single product/ContentProduct'
import ProductDescription from '@/components/pages/shop/single product/ProductDescription'
import RelatedProducts from '@/components/pages/shop/single product/RelatedProducts'
import { sessionInterface } from '@/lib/Interfaces/SessionInterface'
import { shopSingleItemInterface } from '@/lib/Interfaces/ShopInterface'
import { authOptions } from '@/lib/server/Auth'
import { singleProduct } from '@/lib/server/ShopServer'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SingleProduct({
	params,
}: {
	params: { id: string }
}) {
	const shopItem: shopSingleItemInterface = await singleProduct(params.id)
	const session: sessionInterface | null = await getServerSession(authOptions)

	return (
		<main>
			<UrlIndications name={shopItem.name} />
			<ContentProduct shopItem={shopItem} userId={session?.user.id} />
			<ProductDescription shopItem={shopItem} />
			<RelatedProducts id={shopItem._id} tags={shopItem.tags} />
		</main>
	)
}
