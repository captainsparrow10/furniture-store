const profile = {
	name: 'profile',
	title: 'Profiles',
	type: 'document',
	fields: [
		{
			name : 'firstName',
			title: 'First Name',
			type: 'string'
		}, 
		{
			name : 'lastName',
			title: 'Last Name',
			type: 'string'
		}, 
		{
			name: 'email',
			title: 'E-mail',
			type: 'string',
		},
		{
			name : 'password',
			title: 'Password',
			type: 'string'
		},
		{
			name : 'companyName',
			title: 'Company Name',
			type: 'string'
		},
		{
			name : 'streetAddress',
			title: 'Street Address',
			type: 'string'
		},
		{
			name : 'province',
			title: 'Province',
			type: 'string'
		},
		{
			name : 'zipCode',
			title: 'Zip Code',
			type: 'string'
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string'
		}
	],
}

export default profile
