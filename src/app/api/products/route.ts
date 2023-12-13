import { NextResponse } from 'next/server'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'
import { Product } from '@/utils/type'

export async function GET() {
	const items: Product[] = await client.fetch(groq`*[_type == "product"]`)
	return NextResponse.json(items)
}

