import { NextApiRequest } from 'next'
import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextApiRequest, context: any) {
	const { id } = context.params
	try {
		await db.cartPrueba.delete({
			where: {
				id: parseInt(id),
			},
		})
		return NextResponse.json('succed')
	} catch (error) {
		// Handle potential errors here
		console.error('Deletion failed:', error)
		return NextResponse.json('failed')
	}
}

export async function PUT(request: NextRequest, context: any) {
	const { id } = context.params
	const { amount } = await request.json()
	try {
		await db.cartPrueba.update({
			where: {
				id_product: id,
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
