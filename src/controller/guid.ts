import crypto from "crypto";

/**
 * Guid generator
 *
 * @description Generates a guid based on Math.random()
 */
export default class GUID {
	/**
	 * Creates an instance of guid.
	 */
	constructor() {
		if (typeof window !== "undefined" && window.crypto) {
			global.crypto = window.crypto;
		}
	}

	/**
	 * Generates guid
	 * @returns generate
	 *
	 * @example
	 * ```
	 * generate()
	 * ```
	 */
	public generate(): string {
		return crypto.randomUUID();
	}
}
