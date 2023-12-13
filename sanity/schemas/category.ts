const category = {
	name: 'category',
	title: 'Categories',
	type: 'document',
	fields: [
		{
			name: 'id',
			title: 'ID',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 200,
			},
		},
		{
			name: 'name',
			title: 'Category',
			type: 'string',
		},
		{
			name: 'products',
			title: 'Products',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'product' } }],
		},
	],
}

export default category
