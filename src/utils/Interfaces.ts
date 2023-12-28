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
		urlList: string[]
	}[]
}

export interface pruebaInterface {
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
