import { db } from '@db/db'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { loginSchema } from '@/validations/loginSchema'
import { generateRandomToken, refreshToken } from '@/lib/token'
import { generateExpireToken } from '@/lib/expire_token'

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
				const validatedFields = loginSchema.safeParse(credentials)
				if (validatedFields.success) {
					const { email, password } = validatedFields.data
					const userFound = await db.user.findUnique({
						where: {
							email,
						},
					})
					if (!userFound) return null

					if (!userFound || !userFound.password) return null

					const passwordsMatch = await bcrypt.compare(
						password,
						userFound.password
					)

					if (!passwordsMatch) {
						return null
					}
					const token = generateRandomToken()
					const refresh_token = generateRandomToken()
					const expires_at = generateExpireToken()

					try {
						await db.session.upsert({
							where: {
								userid: userFound.id,
							},
							update: {
								token,
								expires_at,
							},
							create: {
								userid: userFound.id,
								token,
								refresh_token,
								expires_at,
							},
						})
					} catch (error) {
						console.log(error)
					}

					const session = await db.session.findUnique({
						where: {
							userid: userFound.id,
						},
					})

					if (!session) {
						return null
					}
					return {
						id: userFound.id,
						name: userFound.firstname + ' ' + userFound.lastname,
						email: userFound.email,
						role: userFound.role,
						accessToken: session.token,
						refresh_token: session.refresh_token,
						expires: session.expires_at,
					}
				}
				return null
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
				session.user.accessToken = token.accessToken
				session.user.refresh_token = token.refresh_token
				session.user.expires = token.expires
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
						session: {
							select: {
								token: true,
								refresh_token: true,
								expires_at: true,
							},
						},
					},
				})
				const userSession = await db.session.findUnique({
					where: {
						userid: user.id,
					},
				})
				if (!dbdUser || !userSession) {
					token.id = user!.id
					return token
				}

				return {
					id: dbdUser.id,
					name: dbdUser.firstname + ' ' + dbdUser.lastname,
					role: dbdUser.role,
					accessToken: userSession.token,
					refresh_token: userSession.refresh_token,
					expires: userSession.expires_at,
				}
			}
			// if (parseInt(token.expires) < Date.now()) {
			// 	token = await refreshToken(token)
			// 	return token
			// } 
				return token
			
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
