'use client'
import { Bars3BottomLeftIcon, Bars3Icon } from '@heroicons/react/20/solid'
import {
	UserIcon,
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
	const [open, setOpen] = useState(false)
	const navegations = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/shop',
			name: 'Shop',
		},
		{
			href: '/contact',
			name: 'Contact',
		},
	]

	return (
		<>
			{open && (
				<div className="absolute w-3/5 h-full bg-white z-50">
					<div className="gap-12 flex flex-col lg:hidden py-6 px-6">
						<Bars3BottomLeftIcon className="icon cursor-pointer text-black lg:hidden" onClick={()=>setOpen(!open)} />
						{navegations.map((nav) => (
							<Link href={nav.href} key={nav.name}>
								<h5 className="hover:font-bold cursor-pointer">{nav.name}</h5>
							</Link>
						))}
					</div>
				</div>
			)}
			<nav className="flex justify-between py-6 bg-transparent px-6 lg:px-12 2xl:px-24 overflow-hidden top-0 w-full fixed  gap-16 lg:justify-end lg:gap-36 z-40">
				<Bars3Icon className="icon cursor-pointer text-black lg:hidden" onClick={()=>setOpen(!open)} />
				<div className="gap-12 hidden lg:flex">
					{navegations.map((nav) => (
						<Link href={nav.href} key={nav.name}>
							<h5 className="hover:font-bold cursor-pointer">{nav.name}</h5>
						</Link>
					))}
				</div>
				<div className="gap-4 flex sm:gap-12">
					<Link href="/login">
						<UserIcon className="icon cursor-pointer" />
					</Link>
					<Link href="/cart">
						<ShoppingCartIcon className="icon cursor-pointer" />
					</Link>
				</div>
			</nav>
		</>
	)
}
