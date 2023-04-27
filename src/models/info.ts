/* eslint-disable prettier/prettier */
/**
 * Info
 *
 * @description - A class that represents an info model for the library, containing the following properties:
 * 					- VERSION: The version of the library.
 * 					- AUTHOR: The author of the library.
 * 					- LICENSE: The license of the library.
 * 					- HOMEPAGE: The homepage of the library.
 * 					- REPOSITORY: The repository of the library.
 */
export default class Info {
	/**
	 * Version  of info
	 */
	private readonly VERSION: string = "1.9.2";

	/**
	 * Author  of info
	 */
	private readonly AUTHOR: string = "Jonas Pfalzgraf";

	/**
	 * License  of info
	 */
	private readonly LICENSE: string = "MPL-2.0";

	/**
	 * Repository  of info
	 */
	private readonly REPOSITORY: string =
		"git+https://github.com/JosunLP/FriendlyHelper.git";

	/**
	 * Homepage  of info
	 */
	private readonly HOMEPAGE: string =
		"https://github.com/JosunLP/FriendlyHelper#readme";

	/**
	 * Gets info
	 * @returns
	 *
	 * @example
	 * ```
	 * getInfo()
	 * ```
	 */
	public getInfo() {
		return {
			VERSION: this.VERSION,
			AUTHOR: this.AUTHOR,
			LICENSE: this.LICENSE,
			REPOSITORY: this.REPOSITORY,
			HOMEPAGE: this.HOMEPAGE,
		};
	}
}
