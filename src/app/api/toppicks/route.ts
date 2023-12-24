import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { NextResponse } from 'next/server'

export async function GET() {
	const topPicks = await client.fetch(
		groq`*[_type == 'top'] {
      "data": *[_id == ^.product._ref] {
      _id,
      price,
        name,
        "colorRef": *[_type == 'color' && _id == ^.colors[0]._ref][0].urlList[0]
          }
        }
		`
	)

	return NextResponse.json(topPicks)
}
