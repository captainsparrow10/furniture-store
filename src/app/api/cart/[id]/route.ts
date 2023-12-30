import { NextApiRequest } from 'next'
import { db } from '../../../../../prisma/lib/db'
import { NextResponse } from 'next/server'

export async function DELETE(req: NextApiRequest, context: any) {
	const { id } = context.params
	try {
		await db.cartPrueba.delete({
			where: {
				id: parseInt(id),
			},
		})
		return NextResponse.json("succed")
	} catch (error) {
		// Handle potential errors here
		console.error('Deletion failed:', error)
		return NextResponse.json("failed")
	}
}
