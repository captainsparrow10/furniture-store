export interface ShopItemsInterface {
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

export interface ShopSingleItemInterface {
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

export interface ShopItemSelectedInterface {
	default: ShopItemsInterface[]
	price: {
		descending: ShopItemsInterface[]
		ascending: ShopItemsInterface[]
	}
	name: {
		descending: ShopItemsInterface[]
		ascending: ShopItemsInterface[]
	}
}
