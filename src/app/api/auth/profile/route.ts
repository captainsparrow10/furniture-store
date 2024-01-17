import { authOptions } from '@/lib/services/Auth'
import { db } from '@db/db'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, response: NextResponse) {
	try {
		const session = await getServerSession(authOptions)
		if (session) {
			const userId = session.user.id
			if (userId) {
				const data = await db.user.findFirst({
					where: {
						id: userId,
					},
					select: {
						firstName: true,
						lastName: true,
						adress: {
							select: {
								companyName: true,
								street: true,
								province: true,
								zipCode: true,
								phone: true,
								country: true,
							},
						},
					},
				})
				return NextResponse.json(data)
			}
		}
		return NextResponse.json({ message: 'data not found' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const session = await getServerSession(authOptions)
		let userId
		if (session) {
			userId = session.user.id
		}
		const data: {
			companyName?: string
			country: string
			street: string
			province: string
			zipCode: string
			phone: string
		} = await request.json()
		if (data && userId) {
			await db.adress.upsert({
				where: {
					userId,
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
					userId,
					...data,
				},
			})
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json({ message: 'Data not found' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function DELETE(request: NextRequest, response: NextResponse) {
	try {
		const session = await getServerSession(authOptions)
		const userId = session?.user.id
		if (userId) {
			await db.cart.deleteMany({
				where: {
					userId,
				},
			})
			return NextResponse.json({ message: 'success' }, { status: 200 })
		}
		return NextResponse.json({ error: 'Any to delete' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}

export async function PUT(request: NextRequest, response: NextResponse) {
	try {
		const session = await getServerSession(authOptions)
		
		const data: {
			firstName: string
			lastName: string
			companyName?: string
			country: string
			street: string
			province: string
			zipCode: string
			phone: string
		} = await request.json()
		if (session) {
			const userId = session.user.id
			if (userId) {
				await db.user.update({
					where: {
						id: userId,
					},
					data: {
						firstName: data.firstName,
						lastName: data.lastName,
					},
				})
				await db.adress.update({
					where: {
						userId,
					},
					data: {
						companyName: data.companyName,
						country: data.country,
						street: data.street,
						province: data.province,
						zipCode: data.zipCode,
						phone: data.phone,
					},
				})
				return NextResponse.json({ message: 'success' }, { status: 200 })
			}
		}
		return NextResponse.json({ message: 'data not found' }, { status: 404 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
