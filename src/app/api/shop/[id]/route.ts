import { client } from "@sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, context:any) {
	const {id}= context.params

  const items = await client.fetch(groq`*[_type == 'product' && _id == '${id}'] {
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