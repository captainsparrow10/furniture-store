const banner = {
  name: 'banner',
	title: 'Banner',
	type: 'document',
	fields: [
    {
      name: 'name',
      title: 'Banner',
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

export default banner
