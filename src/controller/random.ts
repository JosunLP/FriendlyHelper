import RandomModel from "../models/randomModel.js";
import LoremIpsum from "./loremIpsum.js";
import Names from "../models/names.js";
import PhoneNumber from "../models/phoneNumber.js";
import Person from "../models/person.js";
import { PersonProperties } from "../types/personProperties.type.js";
import { CustomPersonPropertie } from "../types/customPersonPropertie.type.js";
import crypto from "crypto";

/**
 * Random
 */
export default class Random {
	private static _instance: Random;

	/**
	 * Gets instance
	 */
	public static getInstance(): Random {
		if (!this._instance) {
			this._instance = new Random();
		}
		return this._instance;
	}

	/**
	 * Creates an instance of random.
	 */
	private constructor() {
		if (typeof window !== "undefined" && window.crypto) {
			global.crypto = window.crypto;
		}
	}

	//#region Basic

	/**
	 * Generates string
	 * @param length
	 * @returns string
	 */
	public generateString(length: number): string {
		let result = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
		return crypto.randomInt(min, max);
	}

	/**
	 * Generates boolean
	 * @returns true if boolean
	 */
	public generateBoolean(): boolean {
		return Math.random() >= 0.5;
	}

	/**
	 * Generates byte
	 * @returns byte
	 */
	public generateByte(): number {
		return this.generateNumber(1, 255);
	}

	/**
	 * Generates bytes
	 * @param length
	 * @returns bytes
	 */
	public generateBytes(length: number): number[] {
		const result: number[] = [];
		for (let i = 0; i < length; i++) {
			result.push(this.generateByte());
		}
		return result;
	}

	/**
	 * Generates short
	 * @returns short
	 */
	public generateShort(): number {
		return this.generateNumber(1, 9);
	}

	/**
	 * Generates long
	 * @returns long
	 */
	public generateLong(): number {
		return this.generateNumber(1, 9999999999999);
	}

	/**
	 * Generates float
	 * @returns float
	 */
	public generateFloat(): number {
		return this.generateNumber(1, 9999999999999) / 100;
	}

	/**
	 * Generates double
	 * @returns double
	 */
	public generateDouble(): number {
		return this.generateNumber(1, 9999999999999) / 100;
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
		return Names.firstNames[this.generateNumber(1, Names.firstNames.length)];
	}

	/**
	 * Generates last name
	 * @returns last name
	 */
	public generateLastName(): string {
		return Names.lastNames[this.generateNumber(1, Names.lastNames.length)];
	}

	/**
	 * Generates full name
	 * @returns full name
	 */
	public generateFullName(): string {
		return this.generateFirstName() + " " + this.generateLastName();
	}

	/**
	 * Generates email
	 * @returns email
	 *
	 * @example
	 *
	 * generateEmail(); // random.Name@somedomain.lol
	 *
	 * generateEmail('Mustermann', 'Max'); // Mustermann.Max@somedomain.lol (with first name and last name)
	 *
	 */
	public generateEmail(lastName?: string, firstName?: string): string {
		let firstPart;
		let lastNameSet;
		let firstNameSet;
		const randomNumber = this.generateNumber(1, 11);

		if (lastName) {
			lastNameSet = lastName;
		} else {
			lastNameSet = this.generateLastName();
		}
		if (firstName) {
			firstNameSet = firstName;
		} else {
			firstNameSet = this.generateFirstName();
		}

		const randomEmailDomain =
			Names.emailDomains[this.generateNumber(1, Names.emailDomains.length)];

		switch (randomNumber) {
			case 1:
				firstPart = this.generateString(this.generateNumber(5, 10));
				break;
			case 2:
				firstPart = firstNameSet + "." + lastNameSet;
				break;
			case 3:
				firstPart = firstNameSet + lastNameSet;
				break;
			case 4:
				firstPart = lastNameSet + "." + firstNameSet;
				break;
			case 5:
				firstPart = lastNameSet + firstNameSet;
				break;
			case 6:
				firstPart = lastNameSet + this.generateNumber(1, 455).toString();
				break;
			case 7:
				firstPart = this.generateNumber(1, 455).toString() + lastNameSet;
				break;
			case 8:
				firstPart = firstNameSet + this.generateNumber(1, 455).toString();
				break;
			case 9:
				firstPart = this.generateNumber(1, 455).toString() + firstNameSet;
				break;
			case 10:
				firstPart =
					this.generateGamerName() + this.generateNumber(1, 455).toString();
				break;
			case 11:
				firstPart =
					this.generateNumber(1, 455).toString() + this.generateGamerName();
				break;
		}

		return firstPart + "@" + randomEmailDomain;
	}

	/**
	 * Generates gamer name
	 * @returns gamer name
	 */
	public generateGamerName(): string {
		return Names.gamingNicknames[
			this.generateNumber(1, Names.gamingNicknames.length)
		];
	}

	/**
	 * Generates gamer tag
	 * @returns gamer tag
	 */
	public generateGamerTag(): string {
		return (
			this.generateGamerName() +
			"#" +
			this.generateString(this.generateNumber(5, 10))
		);
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
	public generateCity(): string {
		return Names.cityNames[this.generateNumber(1, Names.cityNames.length)];
	}

	/**
	 * Generates street name
	 * @returns street name
	 */
	public generateStreetName(): string {
		return Names.streetNames[this.generateNumber(1, Names.streetNames.length)];
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
		return this.generateStreetName() + " " + this.generateStreetNumber();
	}

	/**
	 * Generates state
	 * @returns state
	 */
	public generateState(): string {
		return Names.stateNames[this.generateNumber(1, Names.stateNames.length)];
	}

	/**
	 * Generates country
	 * @returns country
	 */
	public generateCountry(): string {
		return Names.countryNames[
			this.generateNumber(1, Names.countryNames.length)
		];
	}

	/**
	 * Generates language
	 * @returns language
	 */
	public generateLanguage(): string {
		return Names.languageNames[
			this.generateNumber(1, Names.languageNames.length)
		];
	}

	/**
	 * Generates currency
	 * @returns currency
	 */
	public generateCurrency(): string {
		return Names.currencyNames[
			this.generateNumber(1, Names.currencyNames.length)
		];
	}

	/**
	 * Generates company name
	 * @returns company name
	 */
	public generateCompanyName(): string {
		return Names.companyNames[
			this.generateNumber(1, Names.companyNames.length)
		];
	}

	/**
	 * Generates job title
	 * @returns job title
	 */
	public generateJobTitle(): string {
		return Names.jobTitleNames[
			this.generateNumber(1, Names.jobTitleNames.length)
		];
	}

	/**
	 * Generates phone number
	 * @returns phone number
	 */
	public generatePhoneNumber(): string {
		return new PhoneNumber().phoneNumber;
	}

	/**
	 * Generates password
	 * @param length
	 * @param possibleCharacters
	 * @param includeNumbers
	 * @param allSpecialCharacters
	 * @returns password
	 *
	 * @warning This method is not secure. It should only be used for testing purposes.
	 *
	 * @example
	 * generatePassword(10, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], false, false); // generates a password with 10 characters and only letters
	 */
	public generatePassword(
		length: number,
		possibleCharacters: string[],
		includeNumbers: boolean,
		allSpecialCharacters: boolean
	): string {
		let password = "";
		let characterList: string[] = [];
		const alphabetList = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		];
		const alphabetListCaps = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		];
		const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		const specialList = [
			"!",
			"@",
			"#",
			"$",
			"%",
			"^",
			"&",
			"*",
			"(",
			")",
			"-",
			"_",
			"+",
			"=",
			"{",
			"}",
			"[",
			"]",
			"|",
			"<",
			">",
			"?",
			"/",
		];

		if (includeNumbers) {
			characterList = characterList.concat(
				alphabetList,
				alphabetListCaps,
				numberList
			);
		} else {
			characterList = characterList.concat(alphabetList, alphabetListCaps);
		}

		if (possibleCharacters.length > 0) {
			characterList = characterList.concat(possibleCharacters);
		}

		if (allSpecialCharacters) {
			characterList = characterList.concat(specialList);
		}

		for (let i = 0; i < length; i++) {
			password += characterList[this.generateNumber(0, characterList.length)];
		}

		return password;
	}

	/**
	 * Generates random password
	 * @returns password string
	 *
	 * @warning This method is not secure. It should only be used for testing purposes.
	 *
	 * @example
	 * generateRandomPassword(); // generates a random password
	 */
	public generateRandomPassword() {
		const password = this.generatePassword(
			this.generateNumber(8, 32),
			[],
			true,
			true
		);
		return password;
	}

	/**
	 * Generates person
	 * @returns person
	 *
	 * @example
	 * generatePerson(); // generates random person with all available properties
	 *
	 * generatePerson({ id: true, fullName: true, lastName: true, email: false}); // generates random person with only firstName, lastName and email
	 */
	public generatePerson(
		properties?: PersonProperties,
		customProperties?: CustomPersonPropertie[]
	): Person {
		let person: Person;

		if (properties) {
			person = new Person(properties);
		} else {
			person = new Person();
		}

		if (customProperties) {
			for (const customProperty of customProperties) {
				let hasLength = false;
				if (customProperty.length) {
					hasLength = true;
				}
				switch (customProperty.value) {
					case "string":
						if (hasLength) {
							// @ts-ignore
							person[customProperty.key] = this.generateString(
								<number>customProperty.length
							);
						} else {
							// @ts-ignore
							person[customProperty.key] = this.generateString(
								this.generateNumber(1, 32)
							);
						}
						break;

					case "numeric":
						if (hasLength) {
							// @ts-ignore
							person[customProperty.key] = this.generateNumber(
								1,
								<number>customProperty.length
							);
						} else {
							// @ts-ignore
							person[customProperty.key] = this.generateNumber(1, 32);
						}
						break;

					case "boolean":
						// @ts-ignore
						person[customProperty.key] = this.generateBoolean();
						break;

					case "date":
						// @ts-ignore
						person[customProperty.key] = this.generateDate(
							new Date(1970, 0, 1),
							new Date()
						).toISOString();
						break;

					case "currency":
						// @ts-ignore
						person[customProperty.key] = this.generateCurrency();
						break;

					case "percentage":
						// @ts-ignore
						person[customProperty.key] = this.generatePercentage();
						break;

					case "text":
						// @ts-ignore
						person[customProperty.key] = this.generateText();
						break;

					case "template":
						if (customProperty.template) {
							// @ts-ignore
							person[customProperty.key] = this.generateValueByTemplate(
								customProperty.template
							);
						}
						break;

					default:
						break;
				}
			}
		}

		return person;
	}

	/**
	 * Generates value by template
	 * @param template
	 * @param seperator
	 * @returns value by template
	 */
	private generateValueByTemplate(template: string): string {
		const templateParts = [
			"{numeric}",
			"{string}",
			"{boolean}",
			"{date}",
			"{currency}",
			"{percentage}",
			"{text}",
		];
		let value = template;

		templateParts.forEach((templatePart) => {
			if (template.includes(templatePart)) {
				switch (templatePart) {
					case "{numeric}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generateNumber(1, 32).toString()
						);
						break;
					case "{string}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generateString(this.generateNumber(1, 32))
						);
						break;
					case "{boolean}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generateBoolean().toString()
						);
						break;
					case "{date}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generateDate(new Date(1970, 0, 1), new Date()).toString()
						);
						break;
					case "{currency}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generateCurrency().toString()
						);
						break;
					case "{percentage}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generatePercentage().toString()
						);
						break;
					case "{text}":
						value = value.replace(
							new RegExp(templatePart, "g"),
							this.generateText(this.generateNumber(1, 320)).toString()
						);
						break;

					default:
						break;
				}
			}
		});

		return value;
	}

	/**
	 * Generates percentage
	 * @returns percentage
	 *
	 * @example
	 * generatePercentage(); // generates random percentage
	 */
	public generatePercentage(): string {
		return this.generateNumber(1, 100).toString() + "%";
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
	// eslint-disable-next-line no-undef
	public generateEnum(enumeration: any): Enumerator {
		const keys = Object.keys(enumeration);
		return enumeration[keys[this.generateNumber(1, keys.length)]];
	}

	/**
	 * Generates random word
	 * @param length
	 * @returns word
	 */
	public generateWord(length: number): string {
		const loremIpsum = LoremIpsum.getInstance();
		const text = loremIpsum.getText(length);
		const words = text.split(" ");
		return words[this.generateNumber(1, words.length)];
	}

	/**
	 * Generates text
	 * @param length
	 * @returns text
	 */
	public generateText(length: number): string {
		const loremIpsum = LoremIpsum.getInstance();
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
			const tag = this.generateGamerTag();
			array.push(tag);
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
			const name = this.generateGamerName();
			array.push(name);
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
			const name = this.generateFullName();
			array.push(name);
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
			const value = this.generateString(this.generateNumber(5, 30));
			result.push(value);
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
		for (let i = 0; i < length; i++) {
			const string = this.generateString(this.generateNumber(5, 30));
			array.push(string);
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
		for (let i = 0; i < length; i++) {
			const number = this.generateNumber(0, 100000);
			array.push(number);
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
		for (let i = 0; i < length; i++) {
			const bool = this.generateBoolean();
			array.push(bool);
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
		for (let i = 0; i < length; i++) {
			const date = this.generateDate(
				new Date(2017, 1, 1),
				new Date(2017, 12, 31)
			);
			array.push(date);
		}
		return array;
	}

	/**
	 * Generates enum array
	 * @param length
	 * @param enumeration
	 * @returns enum array
	 */
	public generateEnumArray(
		length: number,
		enumeration: undefined
	): undefined[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			const enumValue = this.generateEnum(enumeration);
			array.push(enumValue);
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
		for (let i = 0; i < length; i++) {
			const object = this.generateObject();
			array.push(object);
		}
		return array;
	}

	/**
	 * Generates word array
	 * @param length
	 * @returns word array
	 */
	public generateWordArray(length: number): string[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			const word = this.generateWord(this.generateNumber(1, 10));
			array.push(word);
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
			const text = this.generateText(this.generateNumber(1, 10));
			array.push(text);
		}
		return array;
	}

	/**
	 * Generates person array
	 * @param length
	 * @returns person array
	 *
	 * @example
	 *
	 * generatePersonArray(5);
	 * // returns 3 persons with all available properties^
	 *
	 * generatePersonArray(5, { id: true, fullName: true, lastName: true, email: false});
	 * // returns 3 persons with only firstName, lastName and age properties^
	 */
	public generatePersonArray(
		length: number,
		properties?: PersonProperties
	): Person[] {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			const person = this.generatePerson(properties);
			array.push(person);
		}
		return array;
	}

	/**
	 * Generates email array
	 * @param length
	 * @returns email array
	 */
	public generateEmailArray(length: number): string[] {
		const array = new Array();
		for (let i = 0; i < length; i++) {
			const email = this.generateEmail();
			array.push(email);
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
	public generateStringArrayObejct(length: number): object {
		const array = new Array(length);
		for (let i = 0; i < length; i++) {
			const string = this.generateString(this.generateNumber(5, 10));
			array.push(string);
		}

		const result = {
			array: array,
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
	 * id: '{{guid}}
	 * name: '{{fullName}}',
	 * age: '{{age}}',
	 * isActive: '{{boolean}}',
	 * date: '{{date}}',
	 * array: '{{array}}',
	 * person: '{{person}}',
	 * email: '{{email}}',
	 * stringArray: '{{stringArray}}',
	 * numberArray: '{{numberArray}}',
	 * booleanArray: '{{booleanArray}}',
	 * dateArray: '{{dateArray}}',
	 * objectArray: '{{objectArray}}',
	 * words: '{{words}}',
	 * wordsArray: '{{wordsArray}}',
	 * text: '{{text}}',
	 * textArray: '{{textArray}}',
	 * personArray: '{{personArray}}',
	 * }
	 *
	 * const randomModel = new RandomModel();
	 * const result = randomModel.generateObjectByJsonTemplate(jsonTemplate);
	 */
	public generateObjectByJsonTemplate(jsonTemplate: string): object {
		const person = new Person();
		const randomModel = new RandomModel();

		jsonTemplate = jsonTemplate.toLowerCase();

		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{guid}}", "g"),
			<string>person.id
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{fullname}}", "g"),
			<string>person.fullName
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{age}}", "g"),
			person.age!.toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{boolean}}", "g"),
			this.generateBoolean().toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{date}}", "g"),
			randomModel.DATE.toDateString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{array}}", "g"),
			this.generateArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace("{{person}}", person.toString());
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{email}}", "g"),
			person.email!.toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{stringarray}}", "g"),
			this.generateStringArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{numberarray}}", "g"),
			this.generateNumberArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{booleanarray}}", "g"),
			this.generateBooleanArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{datearray}}", "g"),
			this.generateDateArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{objectarray}}", "g"),
			this.generateObjectArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{words}}", "g"),
			this.generateWord(this.generateNumber(1, 10))
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{wordsarray}}", "g"),
			this.generateWordArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{text}}", "g"),
			this.generateText(this.generateNumber(1, 10))
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{textarray}}", "g"),
			this.generateTextArray(this.generateNumber(1, 10)).toString()
		);
		jsonTemplate = jsonTemplate.replace(
			new RegExp("{{personarray}}", "g"),
			this.generatePersonArray(this.generateNumber(1, 10)).toString()
		);

		const json = JSON.parse(jsonTemplate);

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
	 * const jsonTemplate = {
	 * id: '{{guid}}
	 * name: '{{fullName}}',
	 * age: '{{age}}',
	 * isActive: '{{boolean}}',
	 * date: '{{date}}',
	 * array: '{{array}}',
	 * person: '{{person}}',
	 * email: '{{email}}',
	 * stringArray: '{{stringArray}}',
	 * numberArray: '{{numberArray}}',
	 * booleanArray: '{{booleanArray}}',
	 * dateArray: '{{dateArray}}',
	 * objectArray: '{{objectArray}}',
	 * words: '{{words}}',
	 * wordsArray: '{{wordsArray}}',
	 * text: '{{text}}',
	 * textArray: '{{textArray}}',
	 * personArray: '{{personArray}}',
	 * }
	 *
	 * const randomModel = new RandomModel();
	 * const objectArray = randomModel.generateObjectArrayByJsonTemplate(10, jsonTemplate);
	 */
	public generateObjectArrayByJsonTemplate(
		length: number,
		jsonTemplate: string
	): object[] {
		const array = [];
		for (let i = 0; i < length; i++) {
			const object = this.generateObjectByJsonTemplate(jsonTemplate);
			array.push(object);
		}
		return array;
	}

	//#endregion
}
