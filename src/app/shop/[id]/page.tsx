import UrlIndications from '@/UI/Components/Navegation/UrlIndications'
import ContentProduct from '@/UI/Pages/Shop/single product/ContentProduct'
import ProductDescription from '@/UI/Pages/Shop/single product/ProductDescription'
import RelatedProducts from '@/UI/Pages/Shop/single product/RelatedProducts'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { singleProduct } from '@/app/server'
import { sessionInterface, shopSingleItemInterface } from '@/utils/Interfaces'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SingleProduct({
	params,
}: {
	params: { id: string }
}) {
	const shopItem: shopSingleItemInterface = await singleProduct(params.id)
	const session: sessionInterface | null = await getServerSession(authOptions)
	if (session) {
		return (
			<main>
				<UrlIndications name={shopItem.name} />
				<ContentProduct shopItem={shopItem} userId={session.user.id} />
				<ProductDescription shopItem={shopItem} />
				<RelatedProducts id={shopItem._id} tags={shopItem.tags} />
			</main>
		)
	} else {
		redirect('/account')
	}
}
