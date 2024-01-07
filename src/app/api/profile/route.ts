import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const email = request.nextUrl.searchParams.get('email')
		if (email) {
			const data = await db.user.findUnique({
				where: {
					email: email,
				},
				select: {
					id: true,
				},
			})
			return NextResponse.json(data)
		}
		return NextResponse.json({ message: 'Email not found' }, { status: 404 })
	} catch (error) {
		console.log(error)
	}
}

export async function POST(request: Request) {
	const data: {
		userId: string
		companyName?: string
		country: string
		street: string
		province: string
		zipCode: string
		phone: string
	} = await request.json()
	try {
		if (data) {
			await db.adress.upsert({
				where: {
					userId: data.userId,
				},
				update: {
					companyName: data.companyName,
					country: data.country,
					street: data.street,
					province: data.province,
					zipCode: data.zipCode,
					phone: data.phone,
				},
				create: {
					...data,
				},
			})
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json({ message: 'Data not found' }, { status: 400 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}