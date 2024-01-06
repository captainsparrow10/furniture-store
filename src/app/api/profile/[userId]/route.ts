import { db } from '@db/db'
import {  NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
	try {
		const { userId } = context.params
		if (userId) {
			const data = await db.adress.findFirst({
				where: {
					userId,
				},
			})
			return NextResponse.json(data)
		}
		return NextResponse.json({ error: 'User not found' }, { status: 400 })
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
