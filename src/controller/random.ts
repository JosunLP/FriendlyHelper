import RandomModel from '../models/randomModel.js';
import LoremIpsum from './loremIpsum.js';
import TypeChecker from './typechecker.js';
import Names from '../models/names.js';
import PhoneNumber from '../models/phoneNumber.js';
import Person from '../models/person.js';
import Email from '../models/email.js';

/**
 * Random
 */
export default class Random {

	//#region Basic

	/**
	 * Generates string
	 * @param length
	 * @returns string
	 */
	public generateString(length: number): string {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	/**
	 * Generates number
	 * @param min
	 * @param max
	 * @returns number
	 */
	public generateNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 * Generates boolean
	 * @returns true if boolean
	 */
	public generateBoolean(): boolean {
		return Math.random() >= 0.5;
	}

	/**
	 * Generates date
	 * @param min
	 * @param max
	 * @returns date of date
	 */
	public generateDate(min: Date, max: Date): Date {
		const diff = max.getTime() - min.getTime();
		return new Date(min.getTime() + Math.random() * diff);
	}

	/**
	 * Generates first name
	 * @returns first name
	 */
	public generateFirstName(): string {
		return Names.firstNames[this.generateNumber(0, Names.firstNames.length - 1)];
	}

	/**
	 * Generates last name
	 * @returns last name
	 */
	public generateLastName(): string {
		return Names.lastNames[this.generateNumber(0, Names.lastNames.length - 1)];
	}

	/**
	 * Generates full name
	 * @returns full name
	 */
	public generateFullName(): string {
		return this.generateFirstName() + ' ' + this.generateLastName();
	}

	/**
	 * Generates email
	 * @returns email
	 */
	public generateEmail(): string {
		let firstPart;
		const randomNumber = this.generateNumber(1, 4);
		const randomEmailDomain = Names.emailDomains[this.generateNumber(0, Names.emailDomains.length - 1)];

		switch (randomNumber) {
			case 1:
				firstPart = this.generateString(this.generateNumber(5, 10));
				break;
			case 2:
				firstPart = this.generateFirstName() + '.' + this.generateLastName();
				break;
			case 3:
				firstPart = this.generateLastName() + this.generateNumber(1, 455);
				break;
			case 4:
				firstPart = this.generateGamerName() + this.generateNumber(1, 455);
				break;
		}

		return firstPart + '@' + randomEmailDomain;
	}

	/**
	 * Generates gamer name
	 * @returns gamer name
	 */
	public generateGamerName(): string {
		return Names.gamingNicknames[this.generateNumber(0, Names.lastNames.length - 1)];
	}

	/**
	 * Generates gamer tag
	 * @returns gamer tag
	 */
	public generateGamerTag(): string {
		return this.generateGamerName() + '#' + this.generateString(this.generateNumber(5, 10));
	}

	/**
	 * Generates age
	 * @returns age
	 */
	public generateAge(): number {
		return this.generateNumber(18, 99);
	}

	/**
	 * Generates zip code
	 * @returns zip code
	 */
	public generateZipCode(): string {
		return this.generateNumber(10000, 99999).toString();
	}

	/**
	 * Generates city name
	 * @returns city name
	 */
	public generateCityName(): string {
		return Names.cityNames[this.generateNumber(0, Names.cityNames.length - 1)];
	}

	/**
	 * Generates street name
	 * @returns street name
	 */
	public generateStreetName(): string {
		return Names.streetNames[this.generateNumber(0, Names.streetNames.length - 1)];
	}

	/**
	 * Generates street number
	 * @returns street number
	 */
	public generateStreetNumber(): string {
		return this.generateNumber(1, 999).toString();
	}

	/**
	 * Generates street
	 * @returns street
	 */
	public generateStreet(): string {
		return this.generateStreetName() + ' ' + this.generateStreetNumber();
	}

	/**
	 * Generates state
	 * @returns state
	 */
	public generateState(): string {
		return Names.stateNames[this.generateNumber(0, Names.stateNames.length - 1)];
	}

	/**
	 * Generates country
	 * @returns country
	 */
	public generateCountry(): string {
		return Names.countryNames[this.generateNumber(0, Names.countryNames.length - 1)];
	}

	/**
	 * Generates language
	 * @returns language
	 */
	public generateLanguage(): string {
		return Names.languageNames[this.generateNumber(0, Names.languageNames.length - 1)];
	}

	/**
	 * Generates currency
	 * @returns currency
	 */
	public generateCurrency(): string {
		return Names.currencyNames[this.generateNumber(0, Names.currencyNames.length - 1)];
	}

	/**
	 * Generates company name
	 * @returns company name
	 */
	public generateCompanyName(): string {
		return Names.companyNames[this.generateNumber(0, Names.companyNames.length - 1)];
	}

	/**
	 * Generates job title
	 * @returns job title
	 */
	public generateJobTitle(): string {
		return Names.jobTitleNames[this.generateNumber(0, Names.jobTitleNames.length - 1)];
	}

	/**
	 * Generates phone number
	 * @returns phone number
	 */
	public generatePhoneNumber(): string {
		return new PhoneNumber().phoneNumber;
	}

	/**
	 * Generates person
	 * @returns person
	 */
	public generatePerson(): Person {
		return new Person();
	}

	/**
	* Generates enum
	* @param enumeration
	* @returns enum
	*
	* @example
	*
	* 		const enumeration = {
	* 			'A': 'A',
	* 			'B': 'B',
	* 			'C': 'C'
	* 		};
	* 		const result = generateEnum(enumeration);
	*/
	public generateEnum(enumeration: any): Enumerator {
		const keys = Object.keys(enumeration);
		return enumeration[keys[this.generateNumber(0, keys.length - 1)]];
	}

	/**
	 * Generates words
	 * @param length
	 * @returns words
	 */
	public generateWords(length: number): string {
		const loremIpsum = new LoremIpsum();
		const text = loremIpsum.getText(length);
		const words = text.split(' ');
		return words[this.generateNumber(0, words.length - 1)];
	}

	/**
	 * Generates text
	 * @param length
	 * @returns text
	 */
	public generateText(length: number): string {
		const loremIpsum = new LoremIpsum();
		return loremIpsum.getText(length);
	}

	//#endregion

	//#region Arrays

	/**
	 * Generates gamer tag array
	 * @param length
	 * @returns gamer tag array
	 */
	public generateGamerTagArray(length: number): string[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generateGamerTag());
		}
		return array;
	}

	/**
	 * Generates gamer name array
	 * @param length
	 * @returns gamer name array
	 */
	public generateGamerNameArray(length: number): string[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generateGamerName());
		}
		return array;
	}

	/**
	 * Generates name array
	 * @param length
	 * @returns name array
	 */
	public generateNameArray(length: number): string[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generateFullName());
		}
		return array;
	}

	/**
	 * Generates array
	 * @param length
	 * @returns array
	 */
	public generateArray(length: number): string[] {
		const result = [];
		for (let i = 0; i < length; i++) {
			result.push(this.generateString(this.generateNumber(5, 10)));
		}
		return result;
	}

	/**
	 * Generates string array
	 * @param length
	 * @returns string array
	 */
	public generateStringArray(length: number): string[] {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateString(this.generateNumber(5, 10)));
		}
		return array;
	}

	/**
	 * Generates number array
	 * @param length
	 * @returns number array
	 */
	public generateNumberArray(length: number): number[] {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateNumber(1, 100));
		}
		return array;
	}

	/**
	 * Generates boolean array
	 * @param length
	 * @returns boolean array
	 */
	public generateBooleanArray(length: number): boolean[] {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateBoolean());
		}
		return array;
	}

	/**
	 * Generates date array
	 * @param length
	 * @returns date array
	 */
	public generateDateArray(length: number): Date[] {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateDate(new Date(2017, 1, 1), new Date(2017, 12, 31)));
		}
		return array;
	}

	/**
	 * Generates enum array
	 * @param length
	 * @param enumeration
	 * @returns enum array
	 */
	public generateEnumArray(length: number, enumeration: undefined): undefined[] {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateEnum(enumeration));
		}
		return array;
	}

	/**
	 * Generates object array
	 * @param length
	 * @returns object array
	 */
	public generateObjectArray(length: number): undefined[] {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateObject());
		}
		return array;
	}

	/**
	 * Generates words array
	 * @param length
	 * @returns words array
	 */
	public generateWordsArray(length: number): string[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generateWords(this.generateNumber(1, 10)));
		}
		return array;
	}

	/**
	 * Generates text array
	 * @param length
	 * @returns text array
	 */
	public generateTextArray(length: number): string[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generateText(this.generateNumber(1, 10)));
		}
		return array;
	}

	/**
	 * Generates person array
	 * @param length
	 * @returns person array
	 */
	public generatePersonArray(length: number): Person[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generatePerson());
		}
		return array;
	}

	//#endregion

	//#region Objects

	/**
	 * Generates string array obejct
	 * @param length
	 * @returns string array obejct
	 *
	 * @example
	 *
	 * 		const result = generateStringArrayObject(5);
	 * 		console.log(result);
	 * 		// {
	 * 		// 	'0': 'string',
	 * 		// 	'1': 'string',
	 * 		// 	'2': 'string',
	 * 		// 	'3': 'string',
	 * 		// 	'4': 'string'
	 * 		// }
	 */
	public generateStringArrayObejct(length: number): {} {
		const array = new Array(length);
		const keys = Object.keys(array);
		for (let i = 0; i < length; i++) {
			array.push(this.generateString(this.generateNumber(5, 10)));
		}

		const result = {
			array: array
		};
		return result;
	}

	/**
	 * Generates object
	 * @returns object
	 */
	public generateObject(): RandomModel {
		const randomModel = new RandomModel();
		return randomModel;
	}

	/**
	 * Generates object by json template
	 * @param jsonTemplate
	 * @returns object by json template
	 *
	 * @example
	 * const jsonTemplate = {
	 * name: 'string',
	 * age: 'number',
	 * isActive: 'boolean',
	 * date: 'date',
	 * array: 'array',
	 * enum: 'enum',
	 * stringArray: 'stringArray',
	 * numberArray: 'numberArray',
	 * booleanArray: 'booleanArray',
	 * dateArray: 'dateArray',
	 * enumArray: 'enumArray',
	 * objectArray: 'objectArray',
	 * words: 'words',
	 * wordsArray: 'wordsArray',
	 * text: 'text'
	 * }
	 *
	 * const randomModel = new RandomModel();
	 * const result = randomModel.generateObjectByJsonTemplate(jsonTemplate);
	 */
	public generateObjectByJsonTemplate(jsonTemplate: string): undefined {
		const json = JSON.parse(jsonTemplate);
		const keys = Object.keys(json);
		const typechecker = new TypeChecker();
		keys.forEach(key => {
			const value = json[key];
			if (typechecker.isString(value)) {
				json[key] = this.generateString(value.length);
			} else if (typechecker.isNumber(value)) {
				json[key] = this.generateNumber(value.min, value.max);
			} else if (typechecker.isBoolean(value)) {
				json[key] = this.generateBoolean();
			} else if (typechecker.isDate(value)) {
				json[key] = this.generateDate(new Date(2017, 1, 1), new Date(2017, 12, 31));
			} else if (typechecker.isEnum(value)) {
				json[key] = this.generateEnum(value.enumeration);
			} else if (typechecker.isArray(value)) {
				json[key] = this.generateArray(value.length);
			} else if (typechecker.isObject(value)) {
				json[key] = this.generateObjectByJsonTemplate(value.jsonTemplate);
			}
		});
		return json;
	}

	/**
	 * Generates object array by json template
	 * @param length
	 * @param jsonTemplate
	 * @returns object array by json template
	 *
	 * @example
	 *
	 * const jsonTemplate = '{ "name": { "type": "string", "length": 5 }, "age": { "type": "number", "min": 1, "max": 100 } }';
	 * const randomModel = new RandomModel();
	 * const objectArray = randomModel.generateObjectArrayByJsonTemplate(10, jsonTemplate);
	 */
	public generateObjectArrayByJsonTemplate(length: number, jsonTemplate: string): undefined[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			array.push(this.generateObjectByJsonTemplate(jsonTemplate));
		}
		return array;
	}

	//#endregion
}
