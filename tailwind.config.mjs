/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'purple-main': '#242043',
			'purple-second': '#d4d0e9',
			'grey': "#919191",
			"semi-black": "#131111",
			"white": "#f8f4e8",
			"darkblue": ""
		},
		extend: {
			clipPath: {
				'custom': 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			}
		},
		plugins: [],
	}
}
