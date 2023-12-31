import { db } from "@db/db"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
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
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, user }: any) {
			return { ...token, ...user }
		},
		async session({ session, token, user }: any) {
			session.user = token
			return session
		},
	},
}