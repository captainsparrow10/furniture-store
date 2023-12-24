export type BannerType = {
	_id: string
	name: string
	price: number
	colorRef: string
}

export type PicksType = {
	data: {
		_id: string
		name: string
		price: number
		colorRef: string
	}[]
}

export type ColorType = {
	_createdAt: Date
	_id: string
	_rev: string
	_type: string
	_updatedAt: Date
	id: {
		_type: string
		current: string
	}
	name: string
	urlList: string[]
}

export type ProductType = {
	_createdAt: Date
	_rev: string
	_type: string
	available: number
	name: string
	description: string
	id: {
		_type: string
		current: string
	}
	_updatedAt: Date
	colors: {
		_type: string
		_key: string
		_ref: string
	}[]
	price: number
	_id: string
	tags: {
		_type: string
		_key: string
		_ref: string
  }
}


export type ProfileType = {
	zipCode: number
	_createdAt: Date
	_updatedAt: Date
	lastName: string
	province: string
	streetAddress: string
	email: string
	firstName: string
	_rev: string
	_type: string
	password: string
	phone: string
	_id: string
	companyName: string
}


export type SponsorType = {
	title1: string
	title2: string
	title3: string
	description1: string
	description2: string
	description3: string
}

export type TagType = {
	_createdAt: Date
	_id: string
	_rev: string
	_type: string
	_updatedAt: Date
	name: string
	slug: {
		_type: string
		current: string
	}
}