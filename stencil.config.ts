import { Config } from '@stencil/core';

export const config: Config = {
	// buildEs5: true,
	// https://stenciljs.com/docs/config-extras
	extras: {
		// appendChildSlotFix: true,
		// cloneNodeFix: true,
		enableImportInjection: true,
		// initializeNextTick: true,
		// lifecycleDOMEvents: true,
		// scopedSlotTextContentFix: true,
		// scriptDataOpts: true,
		// slotChildNodesFix: true,
		// tagNameTransform: true,
	},
	// enableCache: true,
	invisiblePrehydration: true,
	hashFileNames: false,
	// globalScript: 'src/global/script.ts',
	// globalStyle: 'src/global/style.css',
	namespace: 'demo',
	preamble: 'Demo - Your component library based on KoliBri',
	outputTargets: [
		{
			type: 'dist',
			copy: [
				{
					src: 'assets',
				},
			],
		},
		{
			type: 'www',
			serviceWorker: null,
			copy: [
				{
					src: 'assets',
				},
			],
		},
	],
	rollupPlugins: {
		before: [],
		after: [],
	},
	taskQueue: 'immediate',
};
