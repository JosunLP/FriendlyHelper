import crypto from "crypto";

/**
 * Guid generator
 *
 * @description Generates a guid based on Math.random()
 */
export default class GUID {
	private static _instance: GUID;

	/**
	 * Gets instance
	 */
	public static getInstance(): GUID {
		if (!this._instance) {
			this._instance = new GUID();
		}
		return this._instance;
	}

	/**
	 * Creates an instance of guid.
	 */
	private constructor() {
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
