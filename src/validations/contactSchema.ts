import { z } from 'zod'

const contactSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(200, { message: 'Name must be less than 200 characters long' }),
	subject: z
		.string()
		.min(3, {
			message: 'Subject must be at least 3 characters long',
		})
		.max(100, { message: 'Subject must be less than 200 characters long' })
		.optional()
		.or(z.literal('')),
	email: z.string().email({
		message: 'Please enter a  valid email',
	}),
	message: z
		.string()
		.min(3, {
			message: 'Message must be at least 3 characters long',
		})
		.max(200, { message: 'Message must be less than 200 characters long' }),
})

export { contactSchema }
