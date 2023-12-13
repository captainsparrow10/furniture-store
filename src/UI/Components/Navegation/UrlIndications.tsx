'use client'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function UrlIndications() {
	const router = usePathname()
	const url = router.split('/')
	const path = url[1]
	const name = url[2]
	return (
		<div className=" w-full flex px-6 lg:px-12 2xl:px-24 pt-24">
			<div className="flex gap-3 truncate">
				<Link href="/">
					<h5>Home</h5>
				</Link>
				<div>
					<ChevronRightIcon className="icon" />
				</div>
				<Link href={`/${path}`}>
					<h5>{path}</h5>
				</Link>
				{name && (
					<>
						<div>
							<ChevronRightIcon className="icon " />
						</div>
						<h5 className="font-bold">{name}</h5>
					</>
				)}
			</div>
		</div>
	)
}
