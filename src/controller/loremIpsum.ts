/**
 * Lorem impsum
 */
export default class LoremImpsum {
	private static _instance: LoremImpsum;

	/**
	 * Gets instance
	 */
	public static getInstance(): LoremImpsum {
		if (!this._instance) {
			this._instance = new LoremImpsum();
		}
		return this._instance;
	}

	private constructor() {}

	/**
	 * Words  of lorem impsum
	 */
	private static readonly _words: string[] = [
		"lorem",
		"ipsum",
		"dolor",
		"sit",
		"amet",
		"consectetur",
		"adipiscing",
		"elit",
		"curabitur",
		"vel",
		"hendrerit",
		"libero",
		"eleifend",
		"blandit",
		"nunc",
		"ornare",
		"odio",
		"ut",
		"orci",
		"gravida",
		"imperdiet",
		"nullam",
		"purus",
		"lacinia",
		"a",
		"pretium",
		"quis",
		"congue",
		"praesent",
		"sagittis",
		"laoreet",
		"auctor",
		"mauris",
		"non",
		"velit",
		"eros",
		"dictum",
		"proin",
		"accumsan",
		"sapien",
		"nec",
		"massa",
		"volutpat",
		"venenatis",
		"sed",
		"eu",
		"molestie",
		"lacus",
		"quisque",
		"porttitor",
		"ligula",
		"dui",
		"mollis",
		"tempus",
		"at",
		"magna",
		"vestibulum",
		"turpis",
		"ac",
		"diam",
		"tincidunt",
		"id",
		"condimentum",
		"enim",
		"sodales",
		"in",
		"hac",
		"habitasse",
		"platea",
		"dictumst",
		"aenean",
		"neque",
		"fusce",
		"augue",
		"leo",
		"eget",
		"semper",
		"mattis",
		"tortor",
		"scelerisque",
		"nulla",
		"interdum",
		"tellus",
		"malesuada",
		"rhoncus",
		"porta",
		"sem",
		"aliquet",
		"et",
		"nam",
		"suspendisse",
		"potenti",
		"vivamus",
		"luctus",
		"fringilla",
		"erat",
		"donec",
		"justo",
		"vehicula",
		"ultricies",
		"varius",
		"ante",
		"primis",
		"faucibus",
		"ultrices",
		"posuere",
		"cubilia",
		"curae",
		"etiam",
		"cursus",
		"aliquam",
		"dapibus",
		"nisl",
		"feugiat",
		"egestas",
		"class",
		"aptent",
		"taciti",
		"sociosqu",
		"ad",
		"litora",
		"torquent",
		"per",
		"conubia",
		"nostra",
		"inceptos",
		"himenaeos",
		"phasellus",
		"nibh",
		"pulvinar",
		"vitae",
		"urna",
		"iaculis",
		"lobortis",
		"nisi",
		"viverra",
		"arcu",
		"morbi",
		"pellentesque",
		"metus",
		"commodo",
		"ut",
		"facilisis",
		"felis",
		"tristique",
		"ullamcorper",
		"placerat",
		"aenean",
		"convallis",
		"sollicitudin",
		"integer",
		"rutrum",
		"duis",
		"est",
		"etiam",
		"bibendum",
		"donec",
		"pharetra",
		"vulputate",
		"maecenas",
		"mi",
		"fermentum",
		"consequat",
		"suscipit",
		"aliquam",
		"habitant",
		"senectus",
		"netus",
		"fames",
		"quisque",
		"euismod",
		"curabitur",
		"lectus",
		"elementum",
		"tempor",
		"risus",
		"cras",
	];

	/**
	 * Gets text
	 * @param wordCount
	 * @returns text
	 *
	 * @example
	 * ```
	 * getText(10)
	 * ```
	 */
	public getText(wordCount: number): string {
		let result = "";
		for (let i = 0; i < wordCount; i++) {
			result +=
				LoremImpsum._words[
					Math.floor(Math.random() * LoremImpsum._words.length)
				] + " ";
		}
		return result;
	}
}
