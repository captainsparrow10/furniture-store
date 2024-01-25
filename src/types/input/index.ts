type LoginInputs = {
	email: string
	password: string
}

type ProfileInputs = {
	firstname: string
	lastname: string
	company?: string
	country: string
	street: string
	province: string
	zipcode: string
	phone: string
}

type RegisterInputs = {
	firstname: string
	lastname: string
	email: string
	password: string
	confirmPassword: string
}
type LostPasswordInputs = {
	email: string
	password: string
	confirmPassword: string
}

export type { ProfileInputs, RegisterInputs, LoginInputs, LostPasswordInputs }
