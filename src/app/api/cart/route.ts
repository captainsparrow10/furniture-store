import { authOptions } from '@/lib/services/Auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, response: NextResponse) {
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

export async function POST(request: NextRequest, response: NextResponse) {
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

export async function DELETE(request: NextRequest, response: NextResponse) {
	try {
		const productId = request.nextUrl.searchParams.get('productId')

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

export async function PUT(request: NextRequest, response: NextResponse) {
	try {
		const {productId, amount} = await request.json().then(data => data.params)

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
					amount,
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
