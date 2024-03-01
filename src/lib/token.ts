import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'
import { JWT } from 'next-auth/jwt'
import { db } from '@db/db'

export function generateRandomToken(): string {
	const userId = crypto.randomBytes(8).toString('hex')
	const exp = Math.floor(Date.now() / 1000) + 60 * 60

	const payload = {
		userId,
		exp,
	}

	const secretKey = crypto.randomBytes(16).toString('hex')
	const token = jwt.sign(payload, secretKey)

	const shortenedToken = crypto
		.createHash('sha256')
		.update(token)
		.digest('hex')
		.substring(0, 32)

	return shortenedToken
}

export function generateExpireToken() {
	const currentDate = new Date()
	currentDate.setMinutes(currentDate.getMinutes() + 5)
	const expiresAt = currentDate.getTime()

	return expiresAt.toString()
}

export async function refreshToken(token: JWT) {
	const user = await db.session.update({
		where: {
			userid: token.id,
		},
		data: {
			token: generateRandomToken(),
			expires_at: generateExpireToken(),
		},
	})
	if (token.refresh_token) {
		const newToken: JWT = {
			...token,
			expires: user.expires_at,
			accessToken: user.token,
		}
		return newToken
	}
	return token
}
