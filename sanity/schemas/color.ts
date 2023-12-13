const color = {
  name: 'color',
  title: 'Colors',
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
      name : 'name',
      title: 'Product Name - Size - Color',
      type: 'string'
    },
    {
      name : 'urlList',
      title: 'Url List',
      type: 'array',
      of : [
        {type: 'string', }
      ]
    }
  ]
}

export default color