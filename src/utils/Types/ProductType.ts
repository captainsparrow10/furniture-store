export type Product = {
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