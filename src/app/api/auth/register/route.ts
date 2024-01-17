import { NextRequest, NextResponse } from 'next/server'
import { db } from '@db/db'

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const data = await request.json()
		const emailFound = await db.user.findUnique({
			where: {
				email: data.email,
			},
		})
		if (emailFound) {
			return NextResponse.json({ error: 'Email exists' }, { status: 404 })
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

export async function PUT(request: NextRequest, response: NextResponse) {
	try {
		const { email, password } = await request.json().then((data) => data.params)
		if (email && password) {
			try {
				await db.user.update({
					where: {
						email,
					},
					data: {
						password,
					},
				})
			} catch (error) {
				console.log(error)
			}
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json(
			{ message: 'data in params not found' },
			{ status: 404 }
		)
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
