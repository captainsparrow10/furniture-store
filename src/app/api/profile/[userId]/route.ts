import { authOptions } from '@/lib/server/Auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import {  NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
	try {
		const session = await getServerSession(authOptions)
		
		// if (userId) {
		// 	const data = await db.adress.findFirst({
		// 		where: {
		// 			userId,
		// 		},
		// 		select: {
		// 			companyName: true,
		// 			street: true,
		// 			province: true,
		// 			zipCode: true,
		// 			phone: true,
		// 			country: true
		// 		}
		// 	})
		// 	return NextResponse.json(data)
		// }
		return NextResponse.json({ error: 'Adress not found' }, { status: 400 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}



export async function DELETE(request: Request, context: any) {
	try {
		const { userId } = context.params
		if (userId) {
			await db.cart.deleteMany({
				where: {
					userId,
				},
			})
			return NextResponse.json('succed')
		}
		return NextResponse.json({ error: 'Any to delete' }, { status: 400 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
