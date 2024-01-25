import { db } from '@db/db'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextResponse } from 'next/server'

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
							password: credentials?.password,
						},
					})
					if (!userFound) return null

					const mathPassword = credentials?.password == userFound.password

					if (!mathPassword) {
						return null
					}

					return {
						id: userFound.id,
						name: userFound.firstname + ' ' + userFound.lastname,
						email: userFound.email,
					}
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
		error: '/login',
	},
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id
				session.user.name = token.name
				session.user.role = token.role
			}
			return session
		},
		async jwt({ token, user }) {
			if (user && user.id) {
				const dbdUser = await db.user.findUnique({
					where: {
						id: user.id,
					},
					select: {
						id: true,
						firstname: true,
						lastname: true,
						role: true,
					},
				})
				if (!dbdUser) {
					token.id = user!.id
					return token
				}
				return {
					id: dbdUser.id,
					name: dbdUser.firstname + ' ' + dbdUser.lastname,
					role: dbdUser.role,
				}
			}
			return token
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
