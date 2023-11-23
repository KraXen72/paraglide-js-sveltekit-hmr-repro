import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { watch } from 'vite-plugin-watch';

export default defineConfig({
	plugins: [
		sveltekit(),
		watch({
			pattern: [
				// "src/**/*.{svelte,ts}", 
				"messages/**/*.json"
			],
			command: "paraglide-js compile --project ./project.inlang.json",
			silent: true
		}),
	]
});
