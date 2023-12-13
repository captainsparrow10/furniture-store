const tag = {
	name: 'tag',
	title: 'Tags',
	type: 'document',
	fields: [
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 200,
			},
		},
		{
			name: 'name',
			title: 'Tag',
			type: 'string',
		},
	],
}

export default tag
