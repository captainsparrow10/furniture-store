import '@/app/globals.css'
import AlertStatus from '@/components/alert'
import Footer from '@/components/footer'
import NavBar from '@/components/navegation/NavBar'
import NextAuth from '@/providers/auth/NextAuth'
import ReactQuery from '@/providers/react-query/ReactQuery'
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
