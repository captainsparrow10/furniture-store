import Footer from '@components/Footer'
import NavBar from '@components/Navegation/NavBar'
import '@/app/globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	weight: '400',
	preload: false,
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
			<NavBar />
				{children}
			<Footer />
			</body>
		</html>
	)
}
