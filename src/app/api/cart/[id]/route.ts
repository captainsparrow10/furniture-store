import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextRequest, context: any) {
	const { id } = context.params
	const { userId } = await req.json()
	try {
		if (userId) {
			await db.cart.delete({
				where: {
					id: parseInt(id),
					id_user: parseInt(userId),
				},
			})
			return NextResponse.json('succed')
		}
	} catch (error) {
		// Handle potential errors here
		console.error('Deletion failed:', error)
		return NextResponse.json('failed')
	}
}

export async function PUT(request: NextRequest, context: any) {
	const { id } = context.params
	const req: {
		params: {
			amount: number
			userId: number
		}
	} = await request.json()
	const { amount, userId } = req.params
	try {
		await db.cart.update({
			where: {
				id_product: id,
				id_user: userId,
			},
			data: {
				amount: amount,
			},
		})
		return NextResponse.json('succed')
	} catch (error) {
		// Handle potential errors here
		console.error('Deletion failed:', error)
		return NextResponse.json('failed')
	}
}
