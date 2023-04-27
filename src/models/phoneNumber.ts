import Random from "../controller/random.js";

/**
 * Phone number
 *
 * @description Phone number model
 */
export default class PhoneNumber {
	/**
	 * Random  of phone number
	 */
	private readonly _random = Random.getInstance();

	/**
	 * Phone number prefixes of phone number
	 */
	private readonly _phoneNumberPrefixes = [
		"+1",
		"+44",
		"+49",
		"+61",
		"+64",
		"+65",
		"+66",
		"+81",
		"+82",
		"+84",
		"+86",
		"+90",
		"+91",
		"+92",
		"+93",
		"+94",
		"+95",
		"+98",
	];

	/**
	 * Generates phone number
	 * @returns phone number
	 */
	private generatePhoneNumber(): string {
		const prefix =
			this._phoneNumberPrefixes[
				this._random.generateNumber(0, this._phoneNumberPrefixes.length - 1)
			];
		const number = this._random.generateNumber(1000000, 9999999);
		return `${prefix}${number}`;
	}

	/**
	 * Phone number regex of phone number
	 */
	public static readonly phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;

	/**
	 * Phone number of phone number
	 */
	public readonly phoneNumber: string = this.generatePhoneNumber();
}
