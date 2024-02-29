'use client'

import { useCart } from '@hooks/useQuery'
import { Bars3BottomLeftIcon, Bars3Icon } from '@heroicons/react/20/solid'
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NavBar() {
	const [open, setOpen] = useState(false)
	const [userPanel, setUserPanel] = useState(false)
	const session = useSession()
	const pathname = usePathname()
	const cartProducts = useCart()
	const navigation = [
		{
			href: '/',
			name: 'home',
		},
		{
			href: '/shop',
			name: 'shop',
		},
		{
			href: '/contact',
			name: 'contact',
		},
	]
	const [scrollBg, setScrollBg] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrollBg('bg-white')
			} else {
				setScrollBg('bg-transparent')
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<>
			<div
				className={clsx(
					'fixed w-full h-full bg-white z-50 overflow-hidden border  border-gray-line transition-all duration-300',
					open ? 'w-4/5' : 'w-0'
				)}
			>
				<div className="gap-12 flex flex-col lg:hidden py-6 px-6">
					<Bars3BottomLeftIcon
						className="icon cursor-pointer text-black lg:hidden"
						onClick={() => setOpen(!open)}
					/>
					{navigation.map((nav) => (
						<Link
							href={nav.href}
							key={nav.name}
							onClick={() => setOpen(!open)}
							prefetch={pathname == nav.href}
						>
							<h5
								className={clsx(
									'hover:font-bold cursor-pointer',
									pathname == nav.href && 'font-bold'
								)}
							>
								{nav.name}
							</h5>
						</Link>
					))}
				</div>
			</div>
			<nav
				id="navBar"
				className={`flex justify-between py-6 bg-transparent px-6 lg:px-12 2xl:px-24 overflow-hidden top-0 w-full fixed  gap-16 md:justify-end lg:gap-36 z-40 ${scrollBg}`}
			>
				<Bars3Icon
					className="icon cursor-pointer text-black md:hidden"
					onClick={() => setOpen(!open)}
				/>
				<div className="gap-12 hidden md:flex">
					{navigation.map((nav) => (
						<Link
							href={nav.href}
							key={nav.name}
							prefetch={pathname == nav.href}
						>
							<h5
								className={clsx(
									'hover:font-bold cursor-pointer',
									pathname == nav.href && 'font-bold'
								)}
							>
								{nav.name}
							</h5>
						</Link>
					))}
				</div>
				<div className="gap-4 flex sm:gap-12">
					{session.data?.user ? (
						<div className="relative w-fit">
							<h5
								className="cursor-pointer uppercase"
								onClick={() => setUserPanel(!userPanel)}
							>
								{session.data?.user.name}
							</h5>
							<div
								className={clsx(
									`w-fit h-fit z-50 overflow-hidden ${scrollBg}`,
									userPanel && 'fixed',
									!userPanel && 'hidden'
								)}
							>
								<div className="flex flex-col gap-4 px-2 py-4 w-fit">
									<Link href="/profile">
										<h5 className="cursor-pointer hover:font-bold">Profile</h5>
									</Link>
									<h5
										className="cursor-pointer hover:font-bold"
										onClick={() => signOut()}
									>
										Log out
									</h5>
								</div>
							</div>
						</div>
					) : (
						<Link href="/login" prefetch={pathname == '/login'}>
							<UserIcon className="icon cursor-pointer" />
						</Link>
					)}
					<Link
						href="/cart"
						prefetch={pathname == '/cart'}
						className="relative w-fit"
					>
						<ShoppingCartIcon className="icon cursor-pointer" />
						{session.data?.user && (
							<div className="absolute bottom-4 left-2 bg-pink rounded-full flex items-center justify-center icon">
								<h5 className="font-bold">{cartProducts.data?.length || 0}</h5>
							</div>
						)}
					</Link>
				</div>
			</nav>
		</>
	)
}
