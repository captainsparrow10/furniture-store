export interface shopItemsInterface {
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

export interface shopSingleItemInterface {
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
	default: shopItemsInterface[]
	price: {
		descending: shopItemsInterface[]
		ascending: shopItemsInterface[]
	}
	name: {
		descending: shopItemsInterface[]
		ascending: shopItemsInterface[]
	}
}
