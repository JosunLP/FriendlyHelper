import aesjs from 'aes-js';

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

	/**
	 * Generates symetric key
	 * @returns symetric key
	 *
	 * @example
	 * ```
	 * let key = Encryption.generateSymetricKey();
	 * ```
	 */
	public generateSymetricKey(): string {
		let key = "";
		for (let i = 0; i < 16; i++) {
			key += String.fromCharCode(Math.floor(Math.random() * 256));
		}
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
		let textBytes = aesjs.utils.utf8.toBytes(val);
		let aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(key));
		let encryptedBytes = aesCtr.encrypt(textBytes);
		let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
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
		let encryptedBytes = aesjs.utils.hex.toBytes(val);
		let aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(key));
		let decryptedBytes = aesCtr.decrypt(encryptedBytes);
		let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
		return decryptedText;
	}

	// https://www.npmjs.com/package/node-rsa

}
