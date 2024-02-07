import { getSession } from '@/lib/util/api'
import { AddressType, ProfileType } from '@/types/user'
import { db } from '@db/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, response: NextResponse) {
	try {
		const id = request.headers.get('authorization')?.split(' ')[1]
		if (!id) {
			return NextResponse.json({ status: 404, statusText: 'User not Found' })
		}
		const data = await db.user.findUnique({
			where: {
				id,
			},
			select: {
				firstname: true,
				lastname: true,
				address: {
					select: {
						company: true,
						street: true,
						province: true,
						zipcode: true,
						phone: true,
						country: true,
					},
				},
			},
		})
		const user = {
			firstname: data?.firstname,
			lastname: data?.lastname,
			...data?.address,
		}
		return NextResponse.json(user, { status: 200, statusText: 'Sent Data' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const userid = request.headers.get('authorization')?.split(' ')[1]
		if (!userid) {
			return NextResponse.json({ status: 404, statusText: 'User not Found' })
		}
		const data: AddressType = await request.json()
		if (!data) {
			return NextResponse.json({ status: 404, statusText: 'Data not received' })
		}
		await db.address.upsert({
			where: {
				userid,
			},
			update: {
				company: data.company,
				country: data.country,
				street: data.street,
				province: data.province,
				zipcode: data.zipcode,
				phone: data.phone,
			},
			create: {
				userid,
				...data,
			},
		})
		return NextResponse.json({ status: 200, statusText: 'Data Received' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function DELETE(request: NextRequest, response: NextResponse) {
	try {
		const userid = request.headers.get('authorization')?.split(' ')[1]

		if (!userid) {
			return NextResponse.json({
				status: 404,
				statusText: 'User not found',
			})
		}

		await db.cart.deleteMany({
			where: {
				userid,
			},
		})
		return NextResponse.json({ status: 200, statusText: 'Data Delete' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}

export async function PUT(request: NextRequest, response: NextResponse) {
	try {
		const userid = request.headers.get('authorization')?.split(' ')[1]
		if (!userid) {
			return NextResponse.json({ status: 404, statusText: 'User not Found' })
		}
		const data: ProfileType = await request.json().then((response) => {
			return response.params.userData
		})
		if (!data) {
			return NextResponse.json({ status: 404, statusText: 'Data not received' })
		}
		await db.user.update({
			where: {
				id: userid,
			},
			data: {
				firstname: data.firstname,
				lastname: data.lastname,
			},
		})

		await db.address.upsert({
			where: {
				userid,
			},
			update: {
				company: data.company,
				country: data.country,
				street: data.street,
				province: data.province,
				zipcode: data.zipcode,
				phone: data.phone,
			},
			create: {
				userid,
				company: data.company,
				country: data.country,
				street: data.street,
				province: data.province,
				zipcode: data.zipcode,
				phone: data.phone,
			},
		})
		return NextResponse.json({ status: 200, statusText: 'Updated Data' })
	} catch (error) {
		return NextResponse.json({ status: 400, statusText: 'Error Request' })
	}
}
