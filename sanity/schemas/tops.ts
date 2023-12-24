const tops = {
  name: 'top',
	title: 'Top Picks',
	type: 'document',
	fields: [
    {
      name: 'name',
      title: 'Product',
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

export default tops