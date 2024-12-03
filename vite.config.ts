import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
