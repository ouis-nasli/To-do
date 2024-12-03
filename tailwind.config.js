/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			textShadow: {
				custom: '0px 2px 0px #000000',
				light: '0px 1px 0px  #FFFFFF',
			},
			colors: {
				primary: {
					DEFAULT: '#3556AB',
					dark: '#071D55',
					darker: '#0D2972',
				},
				secondary: {
					DEFAULT: '#CDE53D',
					dark: '#9EB031',
				},
				yellow: {
					dark: '#F2C94C',
				},
				neutral: {
					light: '#E7E7E7',
					DEFAULT: '#CBCBCB',
					dark: '#8D8D8D',
					white: '#FDFDFD',
				},
				success: {
					DEFAULT: '#53DA69',
					dark: '#49C25D',
					darker: '#399649',
				},
				danger: {
					DEFAULT: '#AB3535',
					dark: '#720D0D',
				},
			},
			boxShadow: {
				'inset-soft': '0px 3px 1px 0px #FFFFFF99 inset',
				'soft-black': '0px 4px 4px 0px #00000040',
				'solid-black': '0px 2px 0px 0px #000000',
				'subtle-black': '0px 4px 4px 0px #0000001A',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-dark': {
					'text-shadow': '0px 2px 0px #000000',
				},
				'.text-shadow-light': {
					'text-shadow': '0px 1px 0px #FFFFFF',
				},
			});
		},
	],
};
