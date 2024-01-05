
import { CartInterface } from '@/lib/Interfaces/CartInterface'
import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: any) {
	const data: CartInterface = await request.json()

	const newItemCar = await db.cartPrueba.upsert({
		where: {
			id_product: data.id_product,
		},
		update: {
			amount: {
				increment: data.amount,
			},
		},
		create: {
			...data,
		},
	})

	return NextResponse.json(newItemCar)
}

export async function GET(request: NextRequest) {
	try {
		const id = request.nextUrl.searchParams.get('id')
		if (id) {
			const data = await db.cartPrueba.findMany({
				where: {
					id_user: parseInt(id),
				},
				orderBy: {
					name: 'asc',
				},
			})

			return NextResponse.json(data)
		}
	} catch (error) {
		return NextResponse.json('Error')
	}
}
