/**
 * Encryption
 */
export default class Encryption {

	/**
	 * Encrypts symmetric
	 * @param a
	 * @param key
	 * @returns encrypted string
	 *
	 * @waring This method is not secure.
	 *
	 * it is only used for testing purposes. It uses a simple XOR encryption.
	 *
	 * @example
	 * ```
	 * let encrypted = Encryption.encryptSymmetric("Hello World", "password");
	 * let decrypted = Encryption.decryptSymmetric(encrypted, "password");
	 * ```
	 *
	 */
	public encryptSymmetric(a: string, key: string): string {
		let encrypted: string[] = [];
		for (let i = 0; i < a.length; i++) {
			encrypted.push(String.fromCharCode(a.charCodeAt(i) + key.charCodeAt(i % key.length)));
		}
		return encrypted.join("");
	}

	/**
	 * Decrypts symmetric
	 * @param a
	 * @param key
	 * @returns decrypted string
	 *
	 * @waring This method is not secure.
	 *
	 * it is only used for testing purposes. It uses a simple XOR encryption.
	 *
	 * @example
	 * ```
	 * let encrypted = Encryption.encryptSymmetric("Hello World", "password");
	 * let decrypted = Encryption.decryptSymmetric(encrypted, "password");
	 * ```
	 */
	public decryptSymmetric(a: string, key: string): string {
		let decrypted: string[] = [];
		for (let i = 0; i < a.length; i++) {
			decrypted.push(String.fromCharCode(a.charCodeAt(i) - key.charCodeAt(i % key.length)));
		}
		return decrypted.join("");
	}
}
