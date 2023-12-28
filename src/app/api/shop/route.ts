import { NextResponse} from 'next/server'
import { client } from '@sanity/lib/client'
import { groq } from 'next-sanity'

export async function GET() {
	const items = await client.fetch(groq`{
    "default": *[_type == 'product'] {
      _id,
      name,
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
            urlList[0]
          }[0]
    },
    "price":
    {  "descending": *[_type == 'product'] {
      _id,
      name,
      price,
      "colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
        urlList[0]
      }[0]
    } | order(price desc),
  
    "ascending": *[_type == 'product'] {
      _id,
      name,
      price,
      "colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
        urlList[0]
      }[0]
    } | order(price asc)
    },
    "name"
    :
    {  "descending": *[_type == 'product'] {
      _id,
      name,
      price,
      "colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
        urlList[0]
      }[0]
    } | order(name desc),
  
    "ascending": *[_type == 'product'] {
      _id,
      name,
      price,
      "colors": *[ _type == 'color' && _id in ^.colors[]._ref] {
        urlList[0]
      }[0]
    } | order(name asc)
    }
  }
  
  `)
	return NextResponse.json(items)
}
