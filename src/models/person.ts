import GUID from "../controller/guid.js";
import Random from "../controller/random.js";
import { PersonProperties } from "../types/personProperties.type.js";

/**
 * Person
 * @class Person
 * @classdesc Person class
 *
 * @description Creates a new Person object with the given properties. When no properties are given, a random person with all possible properties is created.
 *
 * @param {PersonProperties} properties - Person properties
 * @property {string} id - Person id
 * @property {string} firstName - Person first name
 * @property {string} lastName - Person last name
 * @property {string} fullName - Person full name
 * @property {number} age - Person age
 * @property {string} email - Person email
 * @property {string} phone - Person phone
 * @property {string} address - Person address
 * @property {string} city - Person city
 * @property {string} state - Person state
 * @property {string} zip - Person zip
 * @property {string} country - Person country
 */
export default class Person {
	/**
	 * Creates an instance of person.
	 */
	constructor(properties?: PersonProperties) {
		const _random = new Random();

		if (
			!properties ||
			typeof properties !== "object" ||
			properties === undefined
		) {
			this.id = new GUID().generate();
			this.firstName = _random.generateFirstName();
			this.lastName = _random.generateLastName();
			this.fullName = this.firstName + " " + this.lastName;
			this.age = _random.generateAge();
			this.email = _random.generateEmail(this.lastName, this.firstName);
			this.phone = _random.generatePhoneNumber();
			this.address = _random.generateStreet();
			this.city = _random.generateCity();
			this.state = _random.generateState();
			this.zip = _random.generateZipCode();
			this.country = _random.generateCountry();
			this.company = _random.generateCompanyName();
			this.jobTitle = _random.generateJobTitle();
			this.about = _random.generateText(_random.generateNumber(10, 100));
		} else {
			const fName = _random.generateFirstName();
			const lName = _random.generateLastName();
			const fullName = fName + " " + lName;
			if (properties.id) {
				this.id = new GUID().generate();
			}
			if (properties.firstName) {
				this.firstName = fName;
			}
			if (properties.lastName) {
				this.lastName = lName;
			}
			if (properties.fullName) {
				this.fullName = fullName;
			}
			if (properties.age) {
				this.age = _random.generateAge();
			}
			if (properties.email) {
				this.email = _random.generateEmail(lName, fName);
			}
			if (properties.phone) {
				this.phone = _random.generatePhoneNumber();
			}
			if (properties.address) {
				this.address = _random.generateStreet();
			}
			if (properties.city) {
				this.city = _random.generateCity();
			}
			if (properties.state) {
				this.state = _random.generateState();
			}
			if (properties.zip) {
				this.zip = _random.generateZipCode();
			}
			if (properties.country) {
				this.country = _random.generateCountry();
			}
			if (properties.company) {
				this.company = _random.generateCompanyName();
			}
			if (properties.jobTitle) {
				this.jobTitle = _random.generateJobTitle();
			}
			if (properties.about) {
				this.about = _random.generateText(_random.generateNumber(10, 100));
			}

			Object.keys(this).forEach((key) => {
				// @ts-ignore
				if (this[key] === undefined) {
					// @ts-ignore
					delete this[key];
				}
			});
		}
	}

	/**
	 * Id  of person
	 */
	public id: string | undefined;

	/**
	 * First name of person
	 */
	public firstName: string | undefined;

	/**
	 * Last name of person
	 */
	public lastName: string | undefined;

	/**
	 * Full name of person
	 */
	public fullName: string | undefined;

	/**
	 * Age  of person
	 */
	public age: number | undefined;

	/**
	 * Email  of person
	 */
	public email: string | undefined;

	/**
	 * Phone  of person
	 */
	public phone: string | undefined;

	/**
	 * Address  of person
	 */
	public address: string | undefined;

	/**
	 * City  of person
	 */
	public city: string | undefined;

	/**
	 * State  of person
	 */
	public state: string | undefined;

	/**
	 * Zip  of person
	 */
	public zip: string | undefined;

	/**
	 * Country  of person
	 */
	public country: string | undefined;

	/**
	 * Company  of person
	 */
	public company: string | undefined;

	/**
	 * Title  of person
	 */
	public jobTitle: string | undefined;

	/**
	 * About  of person
	 */
	public about: string | undefined;
}
