import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/UI/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
			'3xl': '1536px',
    },
		extend: {
			colors: {
				black: '#323234',
				gray: '#9F9F9F',
				yellow: '#FBEBB5',
				'gray-line': '#D9D9D9',
				cream: '#FFF9E5',
				pink: '#FAF4F4'
			},
			borderRadius : {
				'4xl': '50px'
			},
			backgroundImage : {
				'banner' : "url('/banner.svg')"
			}
		},
	},
	plugins: [],
}
export default config
