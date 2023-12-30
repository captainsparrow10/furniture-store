import { CartInterface } from '@/utils/Interfaces'
import { db } from '../../../../prisma/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: any) {
	const data = await request.json()
	const newItemCar = await db.cartPrueba.create({ data })
	return NextResponse.json(newItemCar)
}

export async function GET() {
	const data = await db.cartPrueba.findMany()
	return NextResponse.json(data)
}

