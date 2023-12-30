import { NextApiRequest } from 'next'
import { db } from '../../../../../prisma/lib/db'

export async function DELETE(req: NextApiRequest, context: any) {
	const { id } = context.params
	try {
		await db.cartPrueba.delete({
			where: {
				id,
			},
		})
		return true
	} catch (error) {
		// Handle potential errors here
		console.error('Deletion failed:', error)
		return false // Deletion failed
	}
}
