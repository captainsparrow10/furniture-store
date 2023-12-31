import { type SchemaTypeDefinition } from 'sanity'
import category from '@sanity/schemas/category'
import product from '@sanity/schemas/product'
import tag from '@sanity/schemas/tag'
import color from '@sanity/schemas/color'
import banner from '@sanity/schemas/banner'
import sponsor from '@sanity/schemas/sponsor'
import tops from './schemas/tops'
import picks from './schemas/picks'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		product,
		category,
		tag,
		color,
		banner,
		sponsor,
		tops,
		picks,
	],
}
