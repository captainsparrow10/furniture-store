const picks = {
  name: 'pick',
	title: 'Picks',
	type: 'document',
	fields: [
    {
      name: 'name',
      title: 'Pick Name',
      type: 'string'
    },
    {
      name : 'product',
      title: 'Product',
      type: "reference",
      to: { type: "product" },
    }
  ]
}

export default picks