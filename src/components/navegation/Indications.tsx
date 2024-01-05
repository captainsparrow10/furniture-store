'use client'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';



export default function Indications() {
  const router = usePathname();
  const url = router.split('/')
  const path = url[1]
  const name = url[2]
	return (
		<div className="h-[600px] w-full relative flex justify-center items-center">
			<Image src="/indicaciones.webp" alt="img" fill/>
			<div className="absolute w-fit text-center">
				<h3>{path}</h3>
				<div className="flex gap-3">
					<Link href="/">
						<h5 >Home</h5>
					</Link>
					<ChevronRightIcon className="icon" />
          <Link href={`/${path}`}>
					<h5 className={`${!name && "font-bold"}`}>{path}</h5>
          </Link>
					{name && (
						<>
							<ChevronRightIcon className="icon" />
							<h5 className='font-bold'>{name}</h5>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
