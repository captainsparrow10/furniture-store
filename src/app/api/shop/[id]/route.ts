import { client } from "@sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET(req: any, context:any) {
	const {id}= context.params

  const items = await client.fetch(groq`*[_type == 'product' && _id == '${id}'] {
    _id,
    name,
    description,
    available,
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
  }[0]
  `)
  
	return NextResponse.json(items)

}