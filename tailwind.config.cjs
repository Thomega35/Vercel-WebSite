/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-purple": "#081A51",
				"light-white": "#f4f4f4",
				"purple": "#b042f5",
			},
		},
	},
	plugins: [require("daisyui")],
}
