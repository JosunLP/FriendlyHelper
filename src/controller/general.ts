/**
 * General
 */
export default class General {
	private static _instance: General;

	/**
	 * Gets instance
	 */
	public static getInstance(): General {
		if (!this._instance) {
			this._instance = new General();
		}
		return this._instance;
	}

	private constructor() {}

	/**
	 * Pauses execution
	 * @param ms
	 * @returns
	 *
	 * @example
	 * ```
	 * pause(1000)
	 * ```
	 */
	public sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
