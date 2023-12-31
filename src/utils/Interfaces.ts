import { BannerType, PicksType } from './Types'

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

export interface CartInterface {
	id_user: number
	id_product: string
	name: string
	image: string
	amount: number
	price: string
}

export interface userSessionInterface {
	user: {
		name: string
		email: string
	}
}

export interface HomeInterface {
	banner: any
	topPicks: PicksType[]
	picks: PicksType[]
	news: any
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
