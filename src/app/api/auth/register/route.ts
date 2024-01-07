import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { db } from '@db/db'

export async function POST(request: Request) {
	try {
		const data = await request.json()
		const emailFound = await db.user.findUnique({
			where: {
				email: data.email,
			},
		})
		if (emailFound) {
			return NextResponse.json({ error: 'Email exists' }, { status: 400 })
		} else {
			const hashedpassword = await bcrypt.hash(data.password, 10)
			await db.user.create({
				data: {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					password: hashedpassword,
				},
			})
		}

		return NextResponse.json({ message: 'success' }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
