/**
 * Info
 */
export default class Info {

	/**
	 * Version  of info
	 */
	private readonly VERSION: string = "1.5.0"

	/**
	 * Author  of info
	 */
	private readonly AUTHOR: string = "Jonas Pfalzgraf"

	/**
	 * License  of info
	 */
	private readonly LICENSE: string = "MPL-2.0"

	/**
	 * Repository  of info
	 */
	private readonly REPOSITORY: string = "git+https://github.com/JosunLP/FriendlyHelper.git"

	/**
	 * Homepage  of info
	 */
	private readonly HOMEPAGE: string = "https://github.com/JosunLP/FriendlyHelper#readme"

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
			HOMEPAGE: this.HOMEPAGE
		};
	}

}
