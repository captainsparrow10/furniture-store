import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

import bcrypt from 'bcrypt'
import { db } from '../../../../../prisma/lib/db'

const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
					placeholder: 'example@gmail.com',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: '******',
				},
			},
			async authorize(credentials: any, req: any): Promise<any> {
				if (credentials) {
					const userFound = await db.user.findUnique({
						where: {
							email: credentials?.email,
						},
					})
					if (!userFound) throw new Error('User not found')

					const mathPassword = await bcrypt.compare(
						credentials?.password,
						userFound.password
					)
					if (!mathPassword) throw new Error('Wrong password')

					return {
						id: userFound.id,
						name: userFound.firstName + ' ' + userFound.lastName,
						email: userFound.email,
					}
				}

				return null
			},
		}),
	],
	callbacks: {
		session({ session, token, user }: any) {
			return session // The return type will match the one returned in `useSession()`
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
