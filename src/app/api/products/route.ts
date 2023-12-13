import { NextResponse } from 'next/server'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'

export async function GET() {
	const items = await client.fetch(groq`*[_type == "product"]`)
	return NextResponse.json(items)
}

