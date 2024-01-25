type RegisterType = {
	email: string
	firstname: string
	lastname: string
	password: string
}

type AddressType = {
	company?: string
	street: string
	province: string
	zipcode: string
	phone: string
	country: string
}
type ProfileType = AddressType & {
	firstname: string
	lastname: string
}

export type { RegisterType, AddressType, ProfileType }
