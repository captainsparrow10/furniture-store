'use client'
import { Bars3Icon } from '@heroicons/react/20/solid'
import {
	UserIcon,
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

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
		<nav className="flex justify-between py-6 bg-transparent px-6 lg:px-12 2xl:px-24 overflow-hidden top-0 w-full fixed  gap-16 lg:justify-end lg:gap-36 z-50">
			<Bars3Icon className="icon cursor-pointer text-black lg:hidden" />

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
				<MagnifyingGlassIcon className="icon cursor-pointer" />
				<HeartIcon className="icon cursor-pointer" />
				<Link href="/cart">
					<ShoppingCartIcon className="icon cursor-pointer" />
				</Link>
			</div>
		</nav>
	)
}
