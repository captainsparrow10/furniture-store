import { NextRequest, NextResponse } from 'next/server'
import { db } from '@db/db'

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const data = await request.json()
		let emailFound
		try {
			
			 emailFound = await db.user.findUnique({
				where: {
					email: data.email,
				},
			})
		} catch (error) {
			console.log(error)
		}
		if (emailFound) {
			return NextResponse.json({ error: 'Email exists' }, { status: 400 })
		} else {
			await db.user.create({
				data: {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					password: data.password,
				},
			})
		}
		return NextResponse.json({ message: 'success' }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
