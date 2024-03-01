import { UserRole } from '@prisma/client'
import type { User } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
	interface Session {
		user: User & {
			id: string
			role: string
			accessToken: string 
		refresh_token: string 
		expires: string
		}
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string
		role: UserRole
		accessToken: string 
		refresh_token: string 
		expires:string
	}
}
