import { CartInterface } from '@/utils/Interfaces'
import { db } from '@db/db'
import { NextResponse } from 'next/server'

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

export async function GET() {
	const data = await db.cartPrueba.findMany()
	return NextResponse.json(data)
}
