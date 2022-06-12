import aesjs from 'aes-js';
import NodeRSA from 'node-rsa';
import { RSA } from '../types/rsaKey';

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
		const encrypted: string[] = [];
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
		const decrypted: string[] = [];
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
		const textBytes = aesjs.utils.utf8.toBytes(val);
		const aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(key));
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
		const aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(key));
		const decryptedBytes = aesCtr.decrypt(encryptedBytes);
		const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
		return decryptedText;
	}

	/**
	 * Generates rsa key pair
	 * @param [bits]
	 * @param [exponent]
	 * @returns rsa key pair
	 *
	 * @info This method implements the NodeRSA library -> https://www.npmjs.com/package/node-rsa
	 *
	 * @example
	 * ```
	 * let key = Encryption.generateRsaKeyPair();
	 * ```
	 */
	public generateRsaKeyPair(bits?: number, exponent?: number): RSA {
		const key = new NodeRSA().generateKeyPair(bits, exponent);
		return key;
	}

	/**
	 * Encrypts rsa
	 * @param val
	 * @param publicKey
	 * @returns rsa encrypted string
	 *
	 * @info This method implements the NodeRSA library -> https://www.npmjs.com/package/node-rsa
	 *
	 * @example
	 * ```
	 * let encrypted = Encryption.encryptRsa("Hello World", key);
	 * let decrypted = Encryption.decryptRsa(encrypted, key);
	 * ```
	 */
	public encryptRsa(val: string, publicKey: string): string {
		const rsa = new NodeRSA(publicKey);
		const encrypted = rsa.encrypt(val, 'base64');
		return encrypted;
	}

	/**
	 * Decrypts rsa
	 * @param val
	 * @param privateKey
	 * @returns rsa decrypted string
	 *
	 * @info This method implements the NodeRSA library -> https://www.npmjs.com/package/node-rsa
	 *
	 * @example
	 * ```
	 * let encrypted = Encryption.encryptRsa("Hello World", "key");
	 * let decrypted = Encryption.decryptRsa(encrypted, "key");
	 * ```
	 */
	public decryptRsa(val: string, privateKey: string): string {
		const rsa = new NodeRSA(privateKey);
		let decrypted = rsa.decrypt(val, 'base64');
		decrypted = Buffer.from(decrypted, 'base64').toString();
		return decrypted;
	}

	/**
	 * Imports rsa key
	 * @param val
	 * @returns rsa key
	 *
	 * @info This method implements the NodeRSA library -> https://www.npmjs.com/package/node-rsa
	 *
	 * @example
	 * ```
	 * let key = Encryption.importRsaKey("-----BEGIN RSA PRIVATE KEY-----...");
	 * ```
	 */
	public importRsaKey(val: string): RSA {
		const key = new NodeRSA();
		key.importKey(val, 'pkcs8-private-pem');
		return key;
	}

	/**
	 * Exports rsa key
	 * @param key
	 * @returns rsa key string
	 *
	 * @info This method implements the NodeRSA library -> https://www.npmjs.com/package/node-rsa
	 *
	 * @example
	 * ```
	 * let key = Encryption.exportRsaKey(key, "public");
	 * ```
	 */
	public exportRsaKey(key: RSA, pub: string): string{
		let check: boolean;
		switch (pub) {
			case "public":
				check = true
				break;

			case "private":
				check = false
				break;

			default:
				check = false
				break;
		}
		const exported = key.exportKey(check ? 'pkcs8-public-pem' : 'pkcs8-private-pem');
		return exported;
	}
}
