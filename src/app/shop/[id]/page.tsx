
import UrlIndications from '@/components/navegation/UrlIndications'
import ContentProduct from '@/containers/shop/single product/ContentProduct'
import ProductDescription from '@/containers/shop/single product/ProductDescription'
import RelatedProducts from '@/containers/shop/single product/RelatedProducts'
import ShopService from '@/services/shop'
import { ShopSingleItemType } from '@/types/shop'
export default async function SingleProduct({
	params,
}: {
	params: { id: string }
}) {
	const shopItem: ShopSingleItemType= await ShopService.getSingleProducts(params.id)
	return (
		<main>
			<UrlIndications name={shopItem.name} />
			<ContentProduct shopItem={shopItem}  />
			<ProductDescription shopItem={shopItem} />
			<RelatedProducts id={shopItem._id} tags={shopItem.tags} />
		</main>
	)
}
