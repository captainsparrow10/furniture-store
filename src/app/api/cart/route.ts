import { authOptions } from '@/lib/auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const session = await getServerSession(authOptions)
		let userId
		if (session) {
			userId = session.user.id
		}
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
		return NextResponse.json({ message: 'data not found' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function POST(request: any) {
	try {
		const session = await getServerSession(authOptions)
		let userId
		if (session) {
			userId = session.user.id
		}
		const data = await request.json()

		if (userId === undefined) {
			return NextResponse.json({ error: 'user not found' }, { status: 404 })
		}
		if (data && userId) {
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
					userId,
					...data,
				},
			})

			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json({ message: 'data not found' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function DELETE(request: Request, context: any) {
	try {
		const { productId } = context.params
		const session = await getServerSession(authOptions)
		let userId
		if (session) {
			userId = session.user.id
		}
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
			{ status: 404 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function PUT(request: Request, context: any) {
	try {
		const { productId, amount } = await context.params
		const session = await getServerSession(authOptions)
		let userId
		if (session) {
			userId = session.user.id
		}
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
			{ status: 404 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
