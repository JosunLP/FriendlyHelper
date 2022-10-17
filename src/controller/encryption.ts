import aesjs from "aes-js";
import crypto from "crypto";

/**
 * Encryption
 */
export default class Encryption {
	/**
	 * Crypto alias of encryption
	 */
	private static _crypto: SubtleCrypto = crypto.subtle;

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
	 * let encrypted = Encryption  .encryptSymmetric("Hello World", "password");
	 * let decrypted = Encryption.decryptSymmetric(encrypted, "password");
	 * ```
	 *
	 */
	public encryptSymmetric(a: string, key: string): string {
		const encrypted: string[] = [];
		for (let i = 0; i < a.length; i++) {
			encrypted.push(
				String.fromCharCode(
					a.charCodeAt(i) + key.charCodeAt(i % key.length)
				)
			);
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
		const decrypted: string[] = [];
		for (let i = 0; i < a.length; i++) {
			decrypted.push(
				String.fromCharCode(
					a.charCodeAt(i) - key.charCodeAt(i % key.length)
				)
			);
		}
		return decrypted.join("");
	}

	/**
	 * Generates symetric key for AES encryption
	 * @returns symetric key
	 *
	 * @example
	 * ```
	 * let key = Encryption.generateSymetricKey();
	 * ```
	 */
	public generateSymetricKey(): Promise<string | boolean> {
		const key = Encryption._crypto
			.generateKey(
				{
					name: "AES-CBC",
					length: 256,
				},
				true,
				["encrypt", "decrypt"]
			)
			.then((key) => {
				const keyHex = Encryption._crypto
					.exportKey("raw", key)
					.then((keyHex) => {
						return aesjs.utils.hex.fromBytes(keyHex);
					})
					.catch((err) => {
						console.error(err);
						return false;
					});

				return keyHex;
			});
		return key;
	}

	/**
	 * Encrypts aes
	 * @param val
	 * @param key
	 * @returns aes encrypted string
	 *
	 * @info This method implements the AES-JS library -> https://www.npmjs.com/package/aes-js
	 *
	 * @example
	 * ```
	 * let encrypted = Encryption.encryptAES("Hello World", "password");
	 * let decrypted = Encryption.decryptAES(encrypted, "password");
	 * ```
	 */
	public encryptAES(val: string, key: string): string {
		const textBytes = aesjs.utils.utf8.toBytes(val);
		const aesCtr = new aesjs.ModeOfOperation.ctr(
			aesjs.utils.hex.toBytes(key)
		);
		const encryptedBytes = aesCtr.encrypt(textBytes);
		const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
		return encryptedHex;
	}

	/**
	 * Decrypts aes
	 * @param val
	 * @param key
	 * @returns aes decrypted string
	 *
	 * @info This method implements the AES-JS library -> https://www.npmjs.com/package/aes-js
	 *
	 * @example
	 * ```
	 * let encrypted = Encryption.encryptAES("Hello World", "password");
	 * let decrypted = Encryption.decryptAES(encrypted, "password");
	 * ```
	 */
	public decryptAES(val: string, key: string): string {
		const encryptedBytes = aesjs.utils.hex.toBytes(val);
		const aesCtr = new aesjs.ModeOfOperation.ctr(
			aesjs.utils.hex.toBytes(key)
		);
		const decryptedBytes = aesCtr.decrypt(encryptedBytes);
		const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
		return decryptedText;
	}
}
