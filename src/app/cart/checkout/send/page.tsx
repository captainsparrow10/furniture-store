"use client"
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
	const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  if (!redirect) {
    setTimeout(() => {
      setRedirect(true);
      router.push('/');
    }, 10000);
  }
	return (
		<div className="flex justify-center items-center h-full">
			<Link href="/">
				<div className="flex  items-center flex-col  w-fit h-fit">
					<h3>Su pedido se ha enviado!</h3>
					<CheckCircleIcon className="h-36 w-36 text-green-300" />
				</div>
			</Link>
		</div>
	)
}
