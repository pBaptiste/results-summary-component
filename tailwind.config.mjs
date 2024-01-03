/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-1': '#ECF2FF',
				'light-blue' : '#CAC9FF',
				'navy-blue' : '#303B59',
				'red' : '#F55',
				'yellow' : '#FFB21E',
				'green' : '#00BB8F',
				'blue' : '#1125D6',
				'dark-navy' : '#303B59',
			},
			backgroundImage: {
				'background-2': 'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)',
				'background-3': 'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%)',
			},
			boxShadow: {
				'card-shadow': '0px 30px 60px 0px rgba(61, 108, 236, 0.15)',
			},
			fontFamily: {
				variable: ['"Hanken Grotesk Variable"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
