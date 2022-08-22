import crypto from "crypto";

/**
 * Guid generator
 *
 * @description Generates a guid based on Math.random()
 */
export default class GUID {
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
