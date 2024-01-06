import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'

export const presentationItems = async () => {
	try {
		const data = await client.fetch(
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
		return data
	} catch (error) {
		throw error
	}
}

export const sponsorItems = async () => {
	try {
		const sponsor = await client.fetch(groq`*[_type == "sponsor"][0]`)
		return sponsor
	} catch (error) {
		throw error
	}
}
