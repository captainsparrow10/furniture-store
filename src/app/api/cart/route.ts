import { CartInterface } from '@/lib/Interfaces/CartInterface'
import { authOptions } from '@/lib/server/Auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

const session = await getServerSession(authOptions)
const userId = session?.user.id

export async function GET() {
	try {
		if (userId) {
			const data = await db.cart.findMany({
				where: {
					userId,
				},
				orderBy: {
					name: 'asc',
				},
			})
			return NextResponse.json(data)
		}
		return NextResponse.json({ message: 'data not found' }, { status: 400 })
	} catch (error) {
		return NextResponse.json('Error')
	}
}

export async function POST(request: any) {
	const data: CartInterface = await request.json()
	try {
		if (data) {
			await db.cart.upsert({
				where: {
					productId: data.productId,
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
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json({ message: 'data not found' }, { status: 400 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function DELETE(context: any) {
	const { productId } = context.params
	try {
		if (userId && productId) {
			await db.cart.delete({
				where: {
					productId,
					userId,
				},
			})
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json(
			{ message: 'data in params not found' },
			{ status: 400 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function PUT(request: Request, context: any) {
	const { productId, amount } = await context.params
	try {
		if (productId && amount && userId) {
			await db.cart.update({
				where: {
					productId,
					userId,
				},
				data: {
					amount: amount,
				},
			})
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json(
			{ message: 'data in params not found' },
			{ status: 400 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
