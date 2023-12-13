import { NextResponse } from 'next/server'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { Product } from '@/utils/type'

export async function GET() {
	const items: Product[] = await client.fetch(groq`*[_type == 'product'] {
    _id,
    name,
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
