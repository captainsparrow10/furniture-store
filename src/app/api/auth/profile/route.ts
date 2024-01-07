import { authOptions } from '@/lib/server/Auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import {  NextResponse } from 'next/server'

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

export async function DELETE(request: Request, context: any) {
	try {
		const session = await getServerSession(authOptions)
		const userId = session?.user.id
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