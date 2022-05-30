import GUID from "../controller/guid.js";
import Random from "../controller/random.js";

/**
 * Person
 */
export default class Person {

	/**
	 * Random  of person
	 */
	private readonly _random = new Random();

	/**
	 * Id  of person
	 */
	public readonly id = new GUID().generate();

	/**
	 * First name of person
	 */
	public firstName: string = this._random.generateFirstName();

	/**
	 * Last name of person
	 */
	public lastName: string = this._random.generateLastName();

	/**
	 * Full name of person
	 */
	public fullName: string = `${this.firstName} ${this.lastName}`;

	/**
	 * Age  of person
	 */
	public age: number = this._random.generateAge();

	/**
	 * Email  of person
	 */
	public email: string = this._random.generateEmail();

	/**
	 * Phone  of person
	 */
	public phone: string = this._random.generatePhoneNumber();

	/**
	 * Address  of person
	 */
	public address: string = this._random.generateStreet();

	/**
	 * City  of person
	 */
	public city: string = this._random.generateCityName();

	/**
	 * State  of person
	 */
	public state: string = this._random.generateState();

	/**
	 * Zip  of person
	 */
	public zip: string = this._random.generateZipCode();

	/**
	 * Country  of person
	 */
	public country: string = this._random.generateCountry();

	/**
	 * Company  of person
	 */
	public company: string = this._random.generateCompanyName();

	/**
	 * Title  of person
	 */
	public title: string = this._random.generateJobTitle();

	/**
	 * About  of person
	 */
	public about: string = this._random.generateText(100);
}
