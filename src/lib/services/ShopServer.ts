import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'

const ShopService = {
	getPresentation: async () => await presentationItems(),
	getProducts: async () => await products(),
	getSingleProducts: async (productId: string) =>
		await singleProduct(productId),
	getTagsSingleProducts: async (
		productId: string,
		tag1: string,
		tag2: string,
		tag3: string
	) => await singleProductTags(productId, tag1, tag2, tag3),
}

const products = async () => {
	const items = await client
		.fetch(
			groq`{
			"default": *[_type == 'product'] {
				_id,
				name,
				price,
				"tags": *[
					_type == 'tag'  && 
						_id in ^.tags[]._ref
				] {
					_id,
					name
				},
				"colors": 
					*[
						_type == 'color' 
						&& 
						_id in ^.colors[]._ref]{
							urlList[0]
						}[0]
			},
			"price":
			{  "descending": *[_type == 'product'] {
				_id,
				name,
				price,
				"colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
					urlList[0]
				}[0]
			} | order(price desc),
		
			"ascending": *[_type == 'product'] {
				_id,
				name,
				price,
				"colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
					urlList[0]
				}[0]
			} | order(price asc)
			},
			"name"
			:
			{  "descending": *[_type == 'product'] {
				_id,
				name,
				price,
				"colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
					urlList[0]
				}[0]
			} | order(name desc),
		
			"ascending": *[_type == 'product'] {
				_id,
				name,
				price,
				"colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
					urlList[0]
				}[0]
			} | order(name asc)
			}
		}
		
		`
		)
		.catch((error) => {
			console.log(error)
			return null
		})
	return items
}

const singleProduct = async (productId: string) => {
	const items = await client
		.fetch(
			groq`*[_type == 'product' && _id == '${productId}'] {
			_id,
			name,
			description,
			available,
			price,
			"tags": *[
				_type == 'tag'  && 
					_id in ^.tags[]._ref
			] {
				_id,
				name
			},
			"colors": 
				*[
					_type == 'color' 
					&& 
					_id in ^.colors[]._ref]{
					_id,
						name,
						urlList[]
					}
		}[0]
		`
		)
		.catch((error) => {
			console.log(error)
			return null
		})
	return items
}

const singleProductTags = async (
	productId: string,
	tag1: string,
	tag2: string,
	tag3: string
) => {
	const items = await client
		.fetch(
			groq`*[
			_type == 'product' &&
			_id != '${productId}' &&
			(
				(
					'${tag1}' in tags[]->name &&
					'${tag2}' in tags[]->name
				) ||
				(
					'${tag1}' in tags[]->name &&
					'${tag3}' in tags[]->name
				) ||
				(
					'${tag2}' in tags[]->name &&
					'${tag3}' in tags[]->name
				)
			)
		]{
			_id,
			name,
			price,
			"colors": *[
				_type == 'color' && 
				_id in ^.colors[]._ref
			]{
				_id,
				name,
				urlList[]
			}
		}  
		`
		)
		.catch((error) => {
			console.log(error)
			return null
		})
	return items
}

export const presentationItems = async () => {
	const data = await client
		.fetch(
			groq`{
				"banner": *[_type == 'banner'] {
						"data": *[_id == ^.product._ref] {
							_id,
							name,
							"colorRef": *[_type == 'color' && _id == ^.colors[0]._ref][0].urlList[0]
						}[0]
					}[0]
				,
				"topPicks":
				*[_type == 'top'] {
						"data": *[_id == ^.product._ref] {
						_id,
						price,
							name,
							"colorRef": *[_type == 'color' && _id == ^.colors[0]._ref][0].urlList[0]
								}
							},
				"news"
				:
			 *[_type == 'product' ]{
						_id,
						name,
						"colors": 
							*[
								_type == 'color' 
								&& 
								_id in ^.colors[]._ref]{
									urlList[0]
								}[0]
					
				}  | order(_createdAt desc)[0],
				 "picks": *[_type == 'pick'] {
						"data": *[_id == ^.product._ref] {
						_id,
							name,
							"colorRef": *[_type == 'color' && _id == ^.colors[0]._ref][0].urlList[0]
								}
							}
			}
			`
		)
		.catch((error) => {
			console.log(error)
			return null
		})
	return data
}

export const sponsorItems = async () => {
	const sponsor = await client
		.fetch(groq`*[_type == "sponsor"][0]`)
		.catch((error) => {
			console.log(error)
			return null
		})
	return sponsor
}

export default ShopService