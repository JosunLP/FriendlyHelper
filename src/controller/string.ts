/**
 * String controller
 */
export default class StringController {
	/**
	 * Purges xmltags
	 * @param str
	 * @returns xmltags
	 *
	 * @example
	 * ```
	 * const str = '<p>Hello</p>';
	 * const result = purgeXmltags(str);
	 * console.log(result);
	 * // Hello
	 */
	public purgeXmltags(str: string): string {
		return str.replace(/<(?:.|\s)*?>/g, "");
	}

	/**
	 * Xmls remove coments
	 * @param str
	 * @returns remove coments
	 */
	public xmlRemoveComents(str: string): string {
		return str.replace(/<!--(?:.|\s)*?-->/g, "");
	}

	/**
	 * Xmls remove script
	 * @param str
	 * @returns remove script
	 */
	public xmlRemoveScript(str: string): string {
		return str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
	}

	/**
	 * Xmls remove cdata
	 * @param str
	 * @returns remove cdata
	 */
	public xmlRemoveCdata(str: string): string
	{
		return str.replace(/<!\[CDATA\[(?:.|\s)*?\]\]>/g, "");
	}

	/**
	 * Purges html
	 * @param str
	 * @returns string
	 *
	 * @example
	 * ```
	 * const str = '<p>Hello</p>';
	 * const result = purgeHtml(str);
	 * console.log(result);
	 * // Hello
	 */
	public purgeHtml(str: string): string {
		return str.replace(/<(?:.|\s)*?>/g, "");
	}

	/**
	 * Htmls sanitize
	 * @param str
	 * @returns sanitized string
	 */
	public htmlSanitize(str: string): string {
		return str
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	/**
	 * Htmls remove coments
	 * @param str
	 * @returns remove coments
	 */
	public htmlRemoveComents(str: string): string {
		return str.replace(/<!--(?:.|\s)*?-->/g, "");
	}

	/**
	 * Htmls remove script
	 * @param str
	 * @returns remove script
	 */
	public htmlRemoveScript(str: string): string {
		return str.replace(
			/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			""
		);
	}

	/**
	 * To camel case
	 * @param str
	 * @returns camel case
	 */
	public toCamelCase(str: string): string {
		return str
			.replace(/\s(.)/g, function ($1) {
				return $1.toUpperCase();
			})
			.replace(/\s/g, "");
	}

	/**
	 * To snake case
	 * @param str
	 * @returns snake case
	 */
	public toSnakeCase(str: string): string {
		return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
	}

	/**
	 * To kebab case
	 * @param str
	 * @returns kebab case
	 */
	public toKebabCase(str: string): string {
		return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
	}

	/**
	 * Purges sql
	 * @param str
	 * @returns sql
	 */
	public purgeSql(str: string): string {
		return str.replace(/\'/g, "''");
	}

	/**
	 * Purges json
	 * @param str
	 * @returns json
	 */
	public purgeJson(str: string): string {
		str = str.replace(/\\/g, "\\\\");
		return str.replace(/\'/g, "\\'");
	}

	/**
	 * Purges dangerous characters
	 * @param str
	 * @returns dangerous characters
	 */
	public purgeDangerousCharacters(str: string): string {
		return str.replace(/[\u0000-\u001F]/g, "");
	}

	/**
	 * Cleans string controller
	 * @param str
	 * @returns clean
	 */
	public clean(str: string): string {
		return str.replace(/\s+/g, " ").trim();
	}

	/**
	 * Purges markdown
	 * @param str
	 * @returns markdown
	 */
	public purgeMarkdown(str: string): string {
		// remove markdown header
		str = str.replace(/^#+\s+/, "");

		// remove markdown list
		str = str.replace(/^\s*\*\s*/gm, "");

		// remove markdown link
		str = str.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, "$1");

		// remove markdown image
		str = str.replace(/!\[([^\]]+)\]\(([^\)]+)\)/g, "$1");

		// remove markdown code
		str = str.replace(/`([^`]+)`/g, "$1");

		// remove markdown italic
		str = str.replace(/\*([^\*]+)\*/g, "$1");

		// remove markdown bold
		str = str.replace(/\*\*([^\*]+)\*\*/g, "$1");

		// remove markdown bold italic
		str = str.replace(/\*\*\*([^\*]+)\*\*/g, "$1");

		return str;
	}

	/**
	 * Purges all
	 * @param str
	 * @returns all
	 */
	public purgeAll(str: string): string {
		return this.purgeXmltags(
			this.purgeHtml(
				this.purgeSql(
					this.purgeJson(
						this.purgeDangerousCharacters(
							this.clean(this.purgeMarkdown(str))
						)
					)
				)
			)
		);
	}

	/**
	 * Gets string from array
	 * @param array
	 * @returns string from array
	 */
	public getStringFromArray(array: string[]): string {
		return array.join(", ");
	}

	/**
	 * Gets array from string
	 * @param str
	 * @returns array from string
	 */
	public getArrayFromString(str: string): string[] {
		return str.split(", ");
	}

	/**
	 * Capitalise string controller
	 * @param str
	 * @returns Capitalise
	 */
	public capitalise(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	/**
	 * Decapitalise string controller
	 * @param str
	 * @returns decapitalise
	 */
	public decapitalise(str: string): string {
		return str.charAt(0).toLowerCase() + str.slice(1);
	}

	/**
	 * To uppercase
	 * @param str
	 * @returns uppercase
	 */
	public toUppercase(str: string): string {
		return str.toUpperCase();
	}

	/**
	 * To lowercase
	 * @param str
	 * @returns lowercase
	 */
	public toLowercase(str: string): string {
		return str.toLowerCase();
	}

	/**
	 * String to buffer
	 * @param str
	 * @returns to buffer
	 */
	public stringToBuffer(str: string): Buffer {
		return Buffer.from(str);
	}
}
