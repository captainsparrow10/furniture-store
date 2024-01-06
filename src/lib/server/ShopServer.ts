import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'

export const products = async () => {
	try {
		const items = await client.fetch(groq`{
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
		
		`)
		return items
	} catch (error) {
		throw error
	}
}

export const singleProduct = async (id: string) => {
	try {
		const items =
			await client.fetch(groq`*[_type == 'product' && _id == '${id}'] {
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
		`)
		return items
	} catch (error) {
		throw error // Re-throw the error to propagate it to the caller
	}
}

export const singleProductTags = async (
	id: string,
	tag1: string,
	tag2: string,
	tag3: string
) => {
	try {
		const items = await client.fetch(groq`*[
			_type == 'product' &&
			_id != '${id}' &&
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
		`)
		return items
	} catch (error) {
		throw error
	}
}
