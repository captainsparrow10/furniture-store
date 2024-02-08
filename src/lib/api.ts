'use server'

import { authOptions } from '@/services/auth'
import { getServerSession } from 'next-auth'

export const getSession = async () => {
	const session = await getServerSession(authOptions)
	return session?.user.accessToken
}


