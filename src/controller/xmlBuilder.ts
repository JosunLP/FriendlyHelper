import XmlElement from "../models/xmlElement.js";

/**
 * Xml builder
 */
export default class XmlBuilder {

	/**
	 * Creates an instance of xml builder.
	 * @param rootName
	 */
	constructor(rootName: string) {
		this.rootName = rootName;
		this.root = new XmlElement(rootName);
		this.stack = [this.root];
	}

	/**
	 * Root name of xml builder
	 */
	rootName: string;

	/**
	 * Root  of xml builder
	 */
	root: XmlElement;

	/**
	 * Stack  of xml builder
	 */
	stack: XmlElement[];

	/**
	 * Eles xml builder
	 * @param name
	 * @param [content]
	 * @returns ele
	 */
	ele(name: string, content?: any): XmlBuilder {
		const child = new XmlElement(name, content);
		this.stack[this.stack.length - 1].children.push(child);
		this.stack.push(child);
		return this;
	}

	/**
	 * Atts xml builder
	 * @param name
	 * @param value
	 * @returns att
	 */
	att(name: string, value: undefined): XmlBuilder {
		this.stack[this.stack.length - 1].attributes[name] = value;
		return this;
	}

	/**
	 * Ends xml builder
	 * @returns end
	 */
	end(): string {
		return this.root.toString();
	}

	/**
	 * To string
	 * @returns string
	 */
	toString(): string {
		return this.end();
	}
}
