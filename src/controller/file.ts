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
     * }, xml, true)
     * ```
     */
    jsonToXmlRecursive(json: any, xml: any, root: boolean): any {
        if (root) {
            xml = xml.ele('root');
        }
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                if (typeof json[key] === 'object') {
                    xml = this.jsonToXmlRecursive(json[key], xml.ele(key), false);
                } else {
                    xml.ele(key).txt(json[key]);
                }
            }
        }
        return xml;
    }

    /**
     * Xmls to json recursive
     * @param xml
     * @param json
     * @returns to json recursive
     *
     * @example
     * ```
     * xmlToJsonRecursive(xml, json)
     * ```
     */
    xmlToJsonRecursive(xml: any, json: any): any {
        for (const key in xml.attributes()) {
            if (xml.attributes().hasOwnProperty(key)) {
                json[key] = xml.attributes()[key];
            }
        }
        for (const key in xml.children) {
            if (xml.children.hasOwnProperty(key)) {
                if (xml.children[key].children.length === 0) {
                    json[key] = xml.children[key].text();
                } else {
                    json[key] = {};
                    this.xmlToJsonRecursive(xml.children[key], json[key]);
                }
            }
        }
        return json;
    }
}
