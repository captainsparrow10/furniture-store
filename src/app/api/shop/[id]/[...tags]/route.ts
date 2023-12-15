import { NextResponse } from 'next/server'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { NextApiRequest } from 'next'
import { shopItemsInterface } from '@/utils/Interfaces'

export async function GET(req: NextApiRequest, context: any) {
	const { id, tags } = context.params
	const tag = tags.map((tag: any) => `'${tag}'`)
	const items: shopItemsInterface[] = await client.fetch(groq`*[
    _type == 'product' &&
    _id != '${id}' &&
    references(*[_type == 'tag' && name in [${tag}]]._id)
  ]{
    _id,
      name,
      price,
      "colors": 
        *[
          _type == 'color' 
          && 
          _id in ^.colors[]._ref]{
          _id,
            name,
            urlList[]
          }
  }
  `)
	return NextResponse.json(items)
}
