import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three']
	},
	resolve: {
		alias: {
			$styles: path.resolve('src/styles')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "$styles/mixins/hover.scss";
				`
			}
		}
	}
});
