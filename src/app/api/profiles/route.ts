
import { client } from "@sanity/lib/client"
import { groq } from "next-sanity"
import { NextResponse } from "next/server"

export async function GET() {
	const profile= await client.fetch(groq`*[_type == "profile"]`)
	return NextResponse.json(profile)
}