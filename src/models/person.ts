import GUID from "../controller/guid.js";
import Random from "../controller/random.js";

/**
 * Person
 */
export default class Person {

	/**
	 * Creates an instance of person.
	 * @param [properties]
	 */
	constructor(properties?: string[]) {
		const _random = new Random();
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
	}

	/**
	 * Id  of person
	 */
	public  id;

	/**
	 * First name of person
	 */
	public firstName: string;

	/**
	 * Last name of person
	 */
	public lastName: string;

	/**
	 * Full name of person
	 */
	public fullName: string;

	/**
	 * Age  of person
	 */
	public age: number;

	/**
	 * Email  of person
	 */
	public email: string;

	/**
	 * Phone  of person
	 */
	public phone: string;

	/**
	 * Address  of person
	 */
	public address: string;

	/**
	 * City  of person
	 */
	public city: string;

	/**
	 * State  of person
	 */
	public state: string;

	/**
	 * Zip  of person
	 */
	public zip: string;

	/**
	 * Country  of person
	 */
	public country: string;

	/**
	 * Company  of person
	 */
	public company: string;

	/**
	 * Title  of person
	 */
	public jobTitle: string;

	/**
	 * About  of person
	 */
	public about: string;
}
