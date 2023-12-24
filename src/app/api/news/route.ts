import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { NextResponse } from 'next/server'

export async function GET() {
	const news = await client.fetch(
		groq`*[_type == 'product' ]{
      _id,
      name,
      "colors": 
        *[
          _type == 'color' 
          && 
          _id in ^.colors[]._ref]{
            urlList[0]
          }[0]
    
  }  | order(_createdAt desc)[0]
		`
	)

	return NextResponse.json(news)
}
