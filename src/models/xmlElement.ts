/**
 * Xml element
 */
export default class XmlElement {

	/**
	 * Creates an instance of xml element.
	 * @param name
	 * @param [content]
	 */
	constructor(name: string, content?: any) {
		this.name = name;
		this.attributes = {};
		this.children = [];
		if (content !== undefined) {
			this.content = content;
		}
	}

	/**
	 * Name  of xml element
	 */
	name: string;

	/**
	 * Attributes  of xml element
	 */
	attributes: { [key: string]: any };

	/**
	 * Children  of xml element
	 */
	children: XmlElement[];

	/**
	 * Content  of xml element
	 */
	content: undefined;

	/**
	 * To string
	 * @returns string
	 */
	toString(): string {
		let str = '<' + this.name;
		for (const attr in this.attributes) {
			if (this.attributes.hasOwnProperty(attr)) {
				str += ' ' + attr + '="' + this.attributes[attr] + '"';
			}
		}
		if (this.children.length === 0 && this.content === undefined) {
			str += '/>';
		} else {
			str += '>';
			if (this.content !== undefined) {
				str += this.content;
			}
			for (const child of this.children) {
				str += child.toString();
			}
			str += '</' + this.name + '>';
		}
		return str;
	}
}
