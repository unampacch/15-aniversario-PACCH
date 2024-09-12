import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        pinkown: 'rgb(var(--pink-own) / <alpha-value>)'
      }
    },
	},
	plugins: [
    animations
  ],
}
