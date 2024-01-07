import { authOptions } from '@/lib/auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
	try {
		const session = await getServerSession(authOptions)
		let userId
		if (session) {
			userId = session.user.id
		}
		if (userId) {
			const data = await db.adress.findFirst({
				where: {
					userId,
				},
				select: {
					companyName: true,
					street: true,
					province: true,
					zipCode: true,
					phone: true,
					country: true,
				},
			})
			return NextResponse.json(data)
		}
		return NextResponse.json({ error: 'Adress not found' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
