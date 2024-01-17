export interface ProfileInterface {
	email: string
	firstName: string
	lastName: string
	password: string
}

export interface AccountInterface {
	firstName: string
	lastName: string
	companyName?: string
	country: string
	street: string
	province: string
	zipCode: string
	phone: string
}

export interface AdressInterface {
	companyName?: string
	street: string
	province: string
	zipCode: string
	phone: string
	country: string
}
export interface UserInterface {
	firstName: string
	lastName: string
	adress: AdressInterface[]
}
