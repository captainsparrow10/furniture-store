import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const email = request.nextUrl.searchParams.get('email')
		if (email) {
			const data: any = await db.user.findUnique({
				where: {
					email: email,
				},
			})
			if (data && data.password) {
				delete data.password
				return NextResponse.json(data)
			}
		}
	} catch (error) {
		return NextResponse.json('Error')
	}
}

export async function POST(request: Request) {
	const data: {
		id_user: number
		companyName?: string
		country: string
		street: string
		province: string
		zipCode: string
		phone: string
	} = await request.json()
	try {
		await db.adress.upsert({
			where: {
				id_user: data.id_user,
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
	} catch (error) {
		return NextResponse.json('Error')
	}
}
