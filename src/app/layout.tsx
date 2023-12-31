import '@/app/globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/navegation/NavBar'
import NextAuth from '@/lib/providers/NextAuth'
import ReactQuery from '@/lib/providers/ReactQuery'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	weight: '400',
	preload: false,
})

export const metadata: Metadata = {
	title: 'Furtniture store',
	description: 'made by sparrow',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={poppins.className} >
				<NextAuth>
					<ReactQuery>
						<NavBar />
						{children}
						<Footer />
					</ReactQuery>
				</NextAuth>
			</body>
		</html>
	)
}
