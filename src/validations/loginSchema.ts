import { z } from 'zod'

const loginSchema = z.object({
	email: z.string().email({
		message: 'Please enter a  valid email',
	}),
	password: z.string().min(6, {
		message: 'Password mus be at least 6 characters long',
	}),
})

export { loginSchema }
