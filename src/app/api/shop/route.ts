import { NextResponse} from 'next/server'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'

export async function GET() {
	const items = await client.fetch(groq`*[_type == 'product'] {
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
        _id,
          name,
          urlList[]
        }
  }
  `)
	return NextResponse.json(items)
}
