/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#f3f4f6',
					dark: '#1f2937',
				},
				secondary: {
					light: '#e5e7eb',
					dark: '#374151',
				},
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				special: ['Special Elite'],
				nunito: ['Nunito', 'sans-serif'],
			},
			minHeight: {
				'10v': '10vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh',
			},
		},
	},
	plugins: [],
}
