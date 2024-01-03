import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: number
			email: string
			exp: number
			iat: number
			jti: string
			name: string
			sub: string
		}
	}
}
