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
			})
			return NextResponse.json(data?.id)
		}
	} catch (error) {
		return NextResponse.json('Error')
	}
}
