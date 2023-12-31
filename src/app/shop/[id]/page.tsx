import UrlIndications from '@/UI/Components/Navegation/UrlIndications'
import ContentProduct from '@/UI/Pages/Shop/single product/ContentProduct'
import ProductDescription from '@/UI/Pages/Shop/single product/ProductDescription'
import RelatedProducts from '@/UI/Pages/Shop/single product/RelatedProducts'
import { singleProduct } from '@/app/server'
import {
	shopSingleItemInterface,

} from '@/utils/Interfaces'


export default async function SingleProduct({
	params,
}: {
	params: { id: string }
}) {
	const shopItem: shopSingleItemInterface = await singleProduct(params.id)

	return (
		<main>
			<UrlIndications name={shopItem.name} />
			<ContentProduct shopItem={shopItem} />
			<ProductDescription shopItem={shopItem} />
			<RelatedProducts id={shopItem._id} tags={shopItem.tags} />
		</main>
	)
}
