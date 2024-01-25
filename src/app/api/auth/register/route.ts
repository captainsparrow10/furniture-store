import { NextRequest, NextResponse } from 'next/server'
import { db } from '@db/db'
import { RegisterType } from '@/types/user'

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const data: RegisterType = await request.json()
		if (!data) {
			return NextResponse.json({ status: 404, statusText: 'Data not received' })
		}
		const emailFound = await db.user.findUnique({
			where: {
				email: data.email,
			},
		})
		if (emailFound) {
			return NextResponse.json({ status: 404, statusText: 'Email exists' })
		}
		await db.user.create({
			data: {
				firstname: data.firstname,
				lastname: data.lastname,
				email: data.email,
				password: data.password,
			},
		})
		return NextResponse.json({ status: 200, statusText: 'Registered User' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function PUT(request: NextRequest, response: NextResponse) {
	try {
		const { email, password } = await request.json().then((data) => data.params)
		if (!(email && password)) {
			return NextResponse.json({
				status: 404,
				statusText: 'data in params not found',
			})
		}
		await db.user.update({
			where: {
				email,
			},
			data: {
				password,
			},
		})
		return NextResponse.json({
			status: 200,
			statusText: 'Updated Email Password',
		})
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}
