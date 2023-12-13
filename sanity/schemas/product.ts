const product = {
	name: 'product',
	title: 'Products',
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
			title: 'Name',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'available',
			title: 'Available',
			type: 'number',
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
      name: 'colors',
      title: 'Colors',
    	type: 'array',
			of: [{ type: 'reference', to: { type: 'color' } }],
    },
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
		},
	],
}


export default product