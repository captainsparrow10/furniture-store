
import UrlIndications from '@/components/navegation/UrlIndications'
import ContentProduct from '@/components/pages/shop/single product/ContentProduct'
import ProductDescription from '@/components/pages/shop/single product/ProductDescription'
import RelatedProducts from '@/components/pages/shop/single product/RelatedProducts'
import { ShopSingleItemInterface } from '@/lib/Interfaces/ShopInterface'
import Service from '@/lib/services'

export default async function SingleProduct({
	params,
}: {
	params: { id: string }
}) {
	const shopItem: ShopSingleItemInterface = await Service.shop.getSingleProducts(params.id)
	return (
		<main>
			<UrlIndications name={shopItem.name} />
			<ContentProduct shopItem={shopItem}  />
			<ProductDescription shopItem={shopItem} />
			<RelatedProducts id={shopItem._id} tags={shopItem.tags} />
		</main>
	)
}
