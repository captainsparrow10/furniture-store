'use client'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SendPage() {
	const router = useRouter()
	const [redirect, setRedirect] = useState(false)

	if (!redirect) {
		setTimeout(() => {
			setRedirect(true)
			router.push('/')
		}, 10000)
	}
	return (
		<div className="flex justify-center items-center  h-screen w-full px-6 lg:px-12 py-16 3xl:px-24">
			<Link href="/">
				<div className="flex  items-center flex-col  w-fit h-fit">
					<h3 className="text-center">Su pedido se ha enviado!</h3>
					<CheckCircleIcon className="h-36 w-36 text-green-300" />
				</div>
			</Link>
		</div>
	)
}
