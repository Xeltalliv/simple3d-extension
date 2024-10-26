const links = [
	{
		"name": "Clearing",
		"dir": "clearing",
		"links": [
			{
				"title": "Clearing",
				"file": "clearing"
			},
		]
	},
	{
		"name": "Basics of working with meshes",
		"dir": "mesh",
		"links": [
			{
				"title": "Creating and deleting",
				"file": "mesh"
			},
			{
				"title": "What happens when you create mesh that exists?",
				"file": "meshReplace"
			},
		]
	},
	{
		"name": "Mesh geomerty",
		"dir": "meshShape",
		"links": [
			{
				"title": "Drawing 1 triangle",
				"file": "shapeXY"
			},
			{
				"title": "Drawing 2 traingles",
				"file": "shapeXY2"
			},
			{
				"title": "Indexed vertices",
				"file": "shapeIndices"
			},
			{
				"title": "Triangle strips",
				"file": "shapeTriStrip"
			},
			{
				"title": "Triangle fans",
				"file": "shapeTriFan"
			},
			{
				"title": "Every primitive type",
				"file": "shapePrimitiveTypes"
			},
			{
				"title": "Interrupting traingle strips/fans, line strips/loops",
				"file": "shapeRestartIndex"
			},
			{
				"title": "Reusing lists",
				"file": "shapeRepurposeLists"
			},
		]
	},
	{
		"name": "Mesh colors",
		"dir": "meshColors",
		"links": [
			{
				"title": "Vertex colors",
				"file": "colorRGB"
			},
			{
				"title": "Vertex colors with transparency",
				"file": "colorRGBA"
			},
		]
	},
	{
		"name": "Nothing is drawn",
		"dir": "meshNothing",
		"links": [
			{
				"title": "Forgetting about depth",
				"file": "forgotDepth"
			},
		]
	},
	{
		"name": "Mesh is not valid for drawing",
		"dir": "meshNotValid",
		"links": [
			{
				"title": "Missing vertex positions",
				"file": "mistakeNoPositions"
			},
			{
				"title": "Length mismatch when setting",
				"file": "mistakeLengthMismatchEarly"
			},
			{
				"title": "Length mismatch of different properties",
				"file": "mistakeLengthMismatchLate"
			},
		]
	},
	{
		"name": "Mesh textures",
		"dir": "meshTextures",
		"links": [
			{
				"title": "Textures and UVs",
				"file": "texturesUV"
			},
			{
				"title": "UV out of bounds",
				"file": "texturesUVOutOfBounds"
			},
			{
				"title": "UV offset and scrolling textures",
				"file": "texturesUVOffset"
			},
			{
				"title": "UV precision issues",
				"file": "texturesUVOffsetTooBig"
			},
		]
	},
	{
		"name": "Transforms",
		"dir": "transforms",
		"links": [
			{
				"title": "Using scratch coordinate system",
				"file": "scratchCoords1"
			},
			{
				"title": "Using scratch coordinate system with other transforms",
				"file": "scratchCoords2"
			},
			{
				"title": "Using -1 to 1 with aspect ratio correction",
				"file": "normCoords1"
			},
			{
				"title": "Adding Z dimensions, but it's cut-off",
				"file": "normCoords2"
			},
			{
				"title": "Simple, but ugly solution",
				"file": "normCoords3"
			},
			{
				"title": "Built-in solution: orthographic projection block for 2D",
				"file": "normCoords4"
			},
			{
				"title": "Perspective projection for 3D",
				"file": "perspective1"
			},
			{
				"title": "Moving the mesh in 3D",
				"file": "perspective2"
			},
			{
				"title": "Moving the camera in 3D",
				"file": "perspective3"
			},
			{
				"title": "Rotating the camera in 3D",
				"file": "perspective4"
			},
			{
				"title": "Incorrectly rotating the camera in 3D",
				"file": "perspective5"
			},
			{
				"title": "Moving both the mesh and the camera. Drawing the mesh in multiple locations at once",
				"file": "perspective6"
			},
			{
				"title": "Adding mesh rotation",
				"file": "perspective7"
			},
			{
				"title": "Simplifying code with a 'wrapper' block",
				"file": "perspective8"
			},
			{
				"title": "Futher simplifying code with 'configure transformation' blocks",
				"file": "perspective9"
			},
		]
	},
	{
		"name": "Manual transforms",
		"dir": "manualTransforms",
		"links": [
			{
				"title": "Preparations",
				"file": "setup"
			},
			{
				"title": "Getting world coordinates of a point on a transformed mesh",
				"file": "posModelToWorld"
			},
			{
				"title": "Getting scratch on-screen coordinates of a point on a transformed mesh",
				"file": "posModelToScratch"
			},
			{
				"title": "Getting absolute in-world direction of direction provided in the model space",
				"file": "dirModelToWorld"
			},
			{
				"title": "Implementing simple 4-directional first person movement",
				"file": "controllerSimple"
			},
			{
				"title": "Implementing 6-directional movement",
				"file": "controllerSixDir"
			},
		]
	},
	{
		"name": "Importing models from files",
		"dir": "import",
		"links": [
			{
				"title": "Importing example",
				"file": "import4"
			},
			{
				"title": "Waiting for import to finish",
				"file": "importWait"
			},
			{
				"title": "Transforming imported meshes",
				"file": "importTransform"
			},
		]
	},
	{
		"name": "Text rendering",
		"dir": "textureText",
		"links": [
			{
				"title": "Starting with simple text",
				"file": "text1"
			},
			{
				"title": "Fixing upsidedown and aspect ratio",
				"file": "text2"
			},
			{
				"title": "Changing resolutions changes text scale",
				"file": "text3"
			},
			{
				"title": "Solving the issue, but text is small now",
				"file": "text4"
			},
			{
				"title": "Re-adding scaling",
				"file": "text5"
			},
			{
				"title": "Centering text with move block",
				"file": "centered1"
			},
			{
				"title": "Centering text by changing mesh to be centered",
				"file": "centered2"
			},
			{
				"title": "Un-centering centered mesh",
				"file": "centered3"
			},
			{
				"title": "Increasing resolution to make text less blurry",
				"file": "edges1"
			},
			{
				"title": "Better solution for sharp text edges",
				"file": "edges2"
			},
			{
				"title": "It's also useful for vegetation",
				"file": "edges3"
			},
		]
	},
	{
		"name": "Animated textures",
		"dir": "meshTextureAnimated",
		"links": [
			{
				"title": "Changing texture directly (AVOID THIS!)",
				"file": "uploadEveryFrame"
			},
			{
				"title": "Pre-creating multiple meshes that all inherit from the same base mesh",
				"file": "inheritShapeCustomTexture"
			},
			{
				"title": "Storing textures in meshes and using inheritance to switch between textures",
				"file": "inheritTexture"
			},
			{
				"title": "Directly changing UV offset",
				"file": "directUVoffset"
			},
			{
				"title": "Inherited UV offset",
				"file": "inheritUVoffset"
			},
		]
	},
	{
		"name": "Common mistakes while loading textures",
		"dir": "meshTextureLoading",
		"links": [
			{
				"title": "Drawing before texture loads",
				"file": "textureBeforeLoads"
			},
			{
				"title": "Blocked by CORS",
				"file": "textureCORS"
			},
			{
				"title": "What is [texture data] anyways?",
				"file": "texturePassing"
			},
		]
	},
	{
		"name": "Instancing",
		"dir": "meshInstancing",
		"links": [
			{
				"title": "2D instancing",
				"file": "instancing2D"
			},
		]
	},
	{
		"name": "Modifying parts of the mesh lists",
		"dir": "partialUpdate",
		"links": [
			{
				"title": "Updating vertex data",
				"file": "vertex1"
			},
			{
				"title": "Updating vertex index data",
				"file": "index1"
			},
			{
				"title": "Updating instance data",
				"file": "instance1"
			},
			{
				"title": "Inserting and removing triangles example",
				"file": "index2"
			},
		]
	},
	{
		"name": "Miscellaneous",
		"dir": "misc",
		"links": [
			{
				"title": "Holding 3D item in hand and UI",
				"file": "holdingAnItem"
			},
		]
	},
	{
		"name": "Simple3D + Skins extension",
		"dir": "extSkins",
		"links": [
			{
				"title": "Simple text skins",
				"file": "textSimple"
			},
			{
				"title": "Textured text skins with gradient",
				"file": "textTextured"
			},
			{
				"title": "Turning 2D costumes into pre-rendered 3D block skins",
				"file": "blocks"
			},
		]
	},
	{
		"name": "Simple3D + Pen+ extension",
		"dir": "extPenPlus",
		"links": [
			{
				"title": "Using transformation blocks with Pen+ v7 shaders",
				"file": "v7"
			},
			{
				"title": "Using transformation blocks with Pen+ v6 textured triangle blocks",
				"file": "v6"
			},
		]
	},
	{
		"name": "Simple3D + Augmented Reality extension",
		"dir": "extAR",
		"links": [
		]
	}
];
