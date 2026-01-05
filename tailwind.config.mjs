/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'purple-main': '#280733',
			'purple-second': '#280733',
			'grey': "#919191",
			"semi-black": "#131111",
			"white": "#fff",
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
		plugins: [typography],
	}
}
