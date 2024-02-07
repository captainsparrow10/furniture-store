import { z } from 'zod'

const profileSchema = z.object({
	firstname: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(200, { message: 'Name must be less than 200 characters long' }),
	lastname: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(200, { message: 'Name must be less than 200 characters long' }),
	company: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(50, { message: 'Name must be less than 200 characters long' })
		.optional()
		.or(z.literal('')),
	country: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(50, { message: 'Name must be less than 50 characters long' }),
	street: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(200, { message: 'Name must be less than 200 characters long' }),
	province: z
		.string()
		.min(3, {
			message: 'Name must be at least 3 characters long',
		})
		.max(50, { message: 'Name must be less than 50 characters long' }),
	zipcode: z
		.string()
		.min(4, {
			message: 'Name must be at least 4 characters long',
		})
		.max(10, { message: 'Name must be less than 10 characters long' }),
	phone: z
		.string()
		.min(8, {
			message: 'Name must be at least 8 characters long',
		})
		.max(20, { message: 'Name must be less than 20 characters long' }),
})

export { profileSchema }
