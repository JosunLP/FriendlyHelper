/**
 * Type for the person properties.
 * @export
 * @interface CustomPersonPropertie
 * @extends {Object}
 */
export interface CustomPersonPropertie extends StringByString {
	key: string;
	value: "numeric" | "string" | "boolean" | "date" | "time" | "datetime" | "object" | "array" | "any" | "currency" | "percentage";
	length: number | undefined;
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
