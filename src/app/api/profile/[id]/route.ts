import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, context: any) {
	try {
		const { id } = context.params
		if (id) {
			const data = await db.adress.findFirst({
				where: {
					id_user: parseInt(id),
				},
			})

			return NextResponse.json(data)
		}
	} catch (error) {
		return NextResponse.json('Error')
	}
}

export async function DELETE(req: NextRequest, context: any) {
	const { id } = await context.params
	try {
		if (id) {
			await db.cartPrueba.deleteMany({
				where: {
					id_user: parseInt(id),
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
