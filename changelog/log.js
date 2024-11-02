const log = [
	{
		"version": "v1.2.0",
		"pr": "https://github.com/TurboWarp/extensions/pull/1618",
		"changes": [
			"Changed the way bone transforms block handles cases of missing original transforms or mismatching data",
			"Changed bone transforms to be inheritable",
			"Added [set [NAME] instance draw limit []] block for limiting amount of drawn instances",
			"Added [set [BOXTYPE] X1:[] Y1:[] X2:[] Y2:[]] and [clear [BOXTYPE]] blocks for specifying and clearing viewport, clipping and pixel readback boxes",
			"Added 3 new options into mesh property reported for estimating VRAM usage",
			"Added a link to the tutorial in the documentation",
			"Added a warning for exceeding vertex index limit",
			"Added a 90 second limit for model decoder. After that, it gets restarted",
			"Added clearing of all the model importing queue upon the call to [reset everything]",
			"Added temporary exports unstable exports to the external API",
			"Optimized transforms",
			"Optimized extension for cases when it's sitting idle and isn't used",
		],
	},
	{
		"version": "v1.1.0",
		"pr": "https://github.com/TurboWarp/extensions/pull/1618",
		"changes": [
			"Deprecated and hidden [set [NAME] accurate interpolation [STATE]] block",
			"Added [set [NAME] compute color [MODE]] block instead of it, which has 1 extra mode",
			"Added [set [NAME] interleaved [PROPERTY] [LIST]] for setting mesh properties from a single list",
			"Added new blending mode \"default behind\", which draws new primitives behind of what is already drawn",
			"Added ability to measure text's horizontal advance distance, which is different from text's bounding box width",
			"Added support for properly removing extension in PenguinMod, Snail IDE and other mods",
			"Added support for SharkPool's \"Layer Control\" extension",
			"Fixed [set clear color R:[] G:[] B:[] A:[]] block to take into a count premultiplied alpha",
			"Fixed bug were it would always use accurate interpolating for vertex colors regardless of what was set",
			"When drawing text with border, the border now extends the image by exactly ceiling of specified size in each of 4 directions",
			"Changed default value of near plane from 0.01 to 0.1 to significantly reduce Z-fighting",
			"Clarified which parts of the code are MPL-2.0 and which are BSD-3-Clause",
		],
	},
	{
		"version": "v1.0.4",
		"pr": "https://github.com/TurboWarp/extensions/pull/1593",
		"changes": [
			"Added \"Open extra resources\" button",
			"Added 2 new comments to sample project",
		],
	},
	{
		"version": "v1.0.3",
		"pr": "https://github.com/TurboWarp/extensions/pull/1500",
		"changes": [
			"Fixed [set [NAME] vertex draw range from (FROM) to (TO)] block",
			"Added popup when extension is packaged incorrectly",
			"Fixed instance XY positions",
			"Fixed font block incorrect ArgumentType",
			"Added extra costume with UV to sample project",
			"Improved docs",
		],
	},
	{
		"version": "v1.0.2",
		"pr": "https://github.com/TurboWarp/extensions/pull/1480",
		"changes": [
			"Fixed [transform direction X: [X] Y: [Y] Z: [Z] from [FROM] to [TO]] block corrupting tranformations that it was only meant to read",
			"Fixed meshes without vertex positions attached causing a crash",
			"Added missing \"?? 1\" in Off file importer",
			"Fixed reading material diffuse colors in Obj importer",
			"Fixed \"importing from file\" transform deforming meshes",
			"Improved Off importer to better comply with specification",
		],
	},
	{
		"version": "v1.0.1",
		"pr": "https://github.com/TurboWarp/extensions/pull/1468",
		"changes": [
			"Fixed [reset transformation's [COMPONENT]] block in PenguinMod",
			"Fixed \"projected (scratch units)\" in [transform X: [X] Y: [Y] Z: [Z] from [FROM] to [TO]] block",
			"Improved docs",
		],
	},
	{
		"version": "v1.0.0",
		"pr": "https://github.com/TurboWarp/extensions/pull/1417",
		"changes": [
			"Initial release"
		],
	},
];
