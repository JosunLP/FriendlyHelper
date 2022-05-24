import XmlBuilder from "./xmlBuilder";

/**
 * File controller
 */
export default class FileController {

    /**
     * Jsons to xml recursive
     * @param json
     * @param xml
     * @param root
     * @returns to xml recursive
     *
     * @example
     * ```
     * jsonToXmlRecursive({
     *    name: 'John',
     *   age: 30,
     *  cars: [
     *   {
     *    model: 'Buick',
     *   year: '1970'
     *  },
     * {
     *   model: 'Cadillac',
     * year: '1979'
     * }
     * ]
     * }, true)
     * ```
     */
    jsonToXmlRecursive(json: [], root: boolean): string {
		const xml = root ? new XmlBuilder('root') : new XmlBuilder('child');
		for (const key in json) {
			if (json.hasOwnProperty(key)) {
				if (typeof json[key] === 'object') {
					xml.ele(key, this.jsonToXmlRecursive(json[key], false));
				} else {
					xml.ele(key, json[key]);
				}
			}
		}
		return xml.end();
    }

    /**
     * Xmls to json recursive
     * @param xml
     * @param json
     * @returns to json recursive
     *
     * @example
	 * ```
	 * xmlToJsonRecursive(xml)
	 * ```
     */
    xmlToJsonRecursive(xml: string): JSON {
		const json: any = {};
		const parser = new DOMParser();
		const doc = parser.parseFromString(xml, 'text/xml');
		const root = doc.children[0];
		if (root.children.length > 0) {
			for (const child of root.children) {
				if (child.children.length > 0) {
					json[child.nodeName] = this.xmlToJsonRecursive(child.outerHTML);
				} else {
					json[child.nodeName] = child.innerHTML;
				}
			}
		} else {
			json[root.nodeName] = root.innerHTML;
		}
		return json;
	}
}
