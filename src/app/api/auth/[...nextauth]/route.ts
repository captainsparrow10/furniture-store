
import { authOptions } from '@/lib/services/Auth'
import NextAuth from 'next-auth/next'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
