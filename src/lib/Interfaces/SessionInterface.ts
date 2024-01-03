export interface sessionInterface {
	user: {
		id: number
		email: string
		exp: number
		iat: number
		jti: string
		name: string
		sub: string
	}
}


export interface userSessionInterface {
	user: {
		name: string
		email: string
	}
}