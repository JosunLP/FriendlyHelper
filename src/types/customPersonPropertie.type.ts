/**
 * Type for the person properties.
 * @export
 * @interface CustomPersonPropertie
 * @extends {Object}
 */
export interface CustomPersonPropertie extends StringByString {
	key: string;
	value:
		| "numeric"
		| "string"
		| "boolean"
		| "date"
		| "time"
		| "datetime"
		| "object"
		| "array"
		| "any"
		| "currency"
		| "percentage"
		| "text"
		| "template";
	length: number | undefined;
	/**
	 * @example
	 *
	 * '{numeric=3}.{string=6}.{date}'
	 */
	template: string | undefined;
}

/**
 * String by string
 * @export
 * @interface StringByString
 * @extends {Object}
 */
interface StringByString {
	[key: string]: string | undefined | number;
}
