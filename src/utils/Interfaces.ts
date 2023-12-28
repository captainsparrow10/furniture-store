import { BannerType, PicksType } from "./Types"

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

export interface HomeInterface {
	banner: any
	topPicks : PicksType[]
	picks: PicksType[]
	news: any
}

export interface shopSingleItemInterface{
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
		urlList: string[]
	}[]
}



export interface ShopItemSelectedInterface {
	default : shopItemsInterface[],
	price: {
		descending: shopItemsInterface[];
		ascending: shopItemsInterface[];
	},
	name: {
		descending: shopItemsInterface[];
		ascending: shopItemsInterface[];
	}

}
