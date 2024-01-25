import { z } from 'zod'

const lostPasswordSchema = z
	.object({
		email: z.string().email({
			message: 'Please enter a  valid email',
		}),
		password: z.string().min(6, {
			message: 'Password mus be at least 6 characters long',
		}),
		confirmPassword: z.string().min(6, {
			message: 'Password mus be at least 6 characters long',
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	})

export { lostPasswordSchema }
