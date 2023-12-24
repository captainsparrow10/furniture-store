import { client } from "@sanity/lib/client"
import { groq } from "next-sanity"
import { NextResponse } from "next/server"

export async function GET() {
	const sponsor= await client.fetch(groq`*[_type == "sponsor"]`)
	return NextResponse.json(sponsor)
}