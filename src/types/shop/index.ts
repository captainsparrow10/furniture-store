type ShopItemsType = {
	_id: string
	name: string
	price: string
	description: string
	tags: {
		_id: string
		name: string
	}[]
	colors: {
		_id: string
		name: string
		urlList: string
	}
}

type ShopSingleItemType = {
	_id: string
	name: string
	price: string
	description: string
	available: number
	tags: {
		_id: string
		name: string
	}[]
	colors: {
		_id: string
		name: string
		urlList: string[]
	}[]
}

type ShopItemSelectedType = {
	default: ShopItemsType[]
	price: {
		descending: ShopItemsType[]
		ascending: ShopItemsType[]
	}
	name: {
		descending: ShopItemsType[]
		ascending: ShopItemsType[]
	}
}

type SponsorType = {
	title1: string
	title2: string
	title3: string
	description1: string
	description2: string
	description3: string
}

export type { ShopItemSelectedType, ShopItemsType, ShopSingleItemType, SponsorType }
