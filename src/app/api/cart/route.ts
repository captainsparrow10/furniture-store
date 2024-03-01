import { getSession } from '@/lib/api'
import { CartType } from '@/types/cart'
import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, response: NextResponse) {
	try {
		const token = request.headers.get('authorization')?.split(' ')[1]
		const session = await db.session.findUnique({
			where: {
				token,
			},
		})
		if (!session) {
			return NextResponse.json({
				status: 404,
				statusText: 'User not found',
			})
		}
		const userid = session.userid

		const userCart = await db.cart.findMany({
			where: {
				userid,
			},
			orderBy: {
				name: 'asc',
			},
		})
		return NextResponse.json(userCart, { status: 200, statusText: 'Sent Data' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const token = request.headers.get('authorization')?.split(' ')[1]
		const session = await db.session.findUnique({
			where: {
				token,
			},
		})
		if (!session) {
			return NextResponse.json({
				status: 404,
				statusText: 'User not found',
			})
		}
		const userid = session.userid
		const data: CartType = await request.json()
		if (!data) {
			return NextResponse.json({ status: 404, statusText: 'Data not received' })
		}

		await db.cart.upsert({
			where: {
				productid: data.productid,
			},
			update: {
				amount: {
					increment: data.amount,
				},
			},
			create: {
				userid,
				...data,
			},
		})

		return NextResponse.json({ status: 200, statusText: 'Data Received' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function DELETE(request: NextRequest, response: NextResponse) {
	try {
		const token = request.headers.get('authorization')?.split(' ')[1]
		const session = await db.session.findUnique({
			where: {
				token,
			},
		})
		if (!session) {
			return NextResponse.json({
				status: 404,
				statusText: 'User not found',
			})
		}
		const userid = session.userid

		if (!userid) {
			return NextResponse.json({ status: 404, statusText: 'User not Found' })
		}
		const productid = request.nextUrl.searchParams.get('productid')
		if (!productid) {
			return NextResponse.json({ status: 404, statusText: 'Data not received' })
		}
		await db.cart.delete({
			where: {
				productid,
				userid,
			},
		})
		return NextResponse.json({ status: 200, statusText: 'Item Delete' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function PUT(request: NextRequest, response: NextResponse) {
	try {
		const token = request.headers.get('authorization')?.split(' ')[1]
		const session = await db.session.findUnique({
			where: {
				token,
			},
		})
		if (!session) {
			return NextResponse.json({
				status: 404,
				statusText: 'User not found',
			})
		}
		const userid = session.userid
		const { productid, amount } = await request
			.json()
			.then((data) => data.params)
		if (!productid || !amount) {
			return NextResponse.json({ status: 404, statusText: 'Data not received' })
		}

		await db.cart.update({
			where: {
				productid,
				userid,
			},
			data: {
				amount,
			},
		})
		return NextResponse.json({ status: 200, statusText: 'Updated Data' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}
