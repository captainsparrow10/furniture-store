import { Bars3Icon } from '@heroicons/react/20/solid'
import {
	UserIcon,
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
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
			href: '/about',
			name: 'About',
		},
		{
			href: '/contact',
			name: 'Contact',
		},
	]
	return (
		<nav className="flex py-6 justify-end bg-transparent px-6 lg:px-12 2xl:px-24 overflow-hidden top-0 w-full fixed sm:justify-between gap-16 lg:justify-end lg:gap-36 z-50">
			<Bars3Icon className="icon cursor-pointer text-black lg:hidden" />
			<div className="gap-12 hidden lg:flex">
					{navegations.map((nav) => (
						<Link href={nav.href} key={nav.name}>
							<h5 className="hover:font-bold cursor-pointer">{nav.name}</h5>
						</Link>
					))}
				</div>
			<div className="gap-12 hidden sm:flex">
				<UserIcon className="icon cursor-pointer" />
				<MagnifyingGlassIcon className="icon cursor-pointer" />
				<HeartIcon className="icon cursor-pointer" />
				<ShoppingCartIcon className="icon cursor-pointer" />
			</div>
		</nav>
	)
}
