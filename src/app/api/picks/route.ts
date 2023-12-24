import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { NextResponse } from 'next/server'

export async function GET() {
	const picks = await client.fetch(
		groq`*[_type == 'pick'] {
      "data": *[_id == ^.product._ref] {
      _id,
        name,
        "colorRef": *[_type == 'color' && _id == ^.colors[0]._ref][0].urlList[0]
          }
        }
		`
	)

	return NextResponse.json(picks)
}
